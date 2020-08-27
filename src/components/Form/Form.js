import React, { Component } from "react";

//Componentes Funcionales
const Contador = props => {
  return (
    <div>
      <h1>{props.valor}</h1>
    </div>
  );
};
const UltimoClick = props => {
  return (
    <div>
      <h2>{props.fechahora}</h2>
    </div>
  );
};
const Button = props => {
  return (
    <button onClick={() => props.onClick()}> {props.label}</button>
  );
};

//States y Props
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      fechahora: 'Nunca se ha hecho click'
    };
  }
  onClickHandler() {

    let currentdate = new Date();
    let datetime = "Último click: " + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();

    this.setState({
      contador: this.state.contador + 1,
      fechahora: datetime
    });
  }
  render() {
    return (
      <div>
        <Contador valor={this.state.contador} />
        <UltimoClick fechahora={this.state.fechahora} />
        <Button label="Aumentar Contador" onClick={() => this.onClickHandler()} />
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
