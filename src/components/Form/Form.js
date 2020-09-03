import React, { Component } from "react";
import './form.css';

//Componentes Funcionales
const Contador = props => {
  return (
    <div className="inline" >
      <h1>{props.valor}</h1>
    </div>
  );
};
const UltimoClick = props => {
  return (
    <div class="last">
      <h2>{props.fechahora}</h2>
    </div>
  );
};
const Button = props => {
  return (
    <button className="inline" onClick={() => props.onClick()}> {props.label}</button>
  );
};

//States y Props
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      fechahora: 'Nunca se ha hecho click'
    };
    this.max = 10;
    this.min = 0;
  }


  
    getDate() {
    let currentdate = new Date();
    let datetime = "Último click: " + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
      return datetime;
  }

  addHandler() {
    let datetime = this.getDate();
    if ( this.state.contador < this.max ) {
      this.setState({
        contador: this.state.contador + 1,
        fechahora: datetime
      });
    } else {
      alert ("La cantidad no puede ser mayor a 10.");
      this.setState({
        fechahora: datetime
      });
    }
  }

  removeHandler() {
    let datetime = this.getDate();
    if ( this.state.contador > this.min ) {
      this.setState({
          contador: this.state.contador - 1,
          fechahora: datetime
      });
    } else {
      alert ("La cantidad no puede ser menor a 0.");
      this.setState({
        fechahora: datetime
      });
    }
  }

  render() {
    return (
      <div class="form">
        <Button label="-" onClick={() => this.removeHandler()} />
        <Contador valor={this.state.contador} />
        <Button label="+" onClick={() => this.addHandler()} />
        <UltimoClick fechahora={this.state.fechahora} />
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}
