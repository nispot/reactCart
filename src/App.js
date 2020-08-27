import React from 'react';
import Home from './components/Home/Home';
import './App.css';
// Importo los estilos de bootstrap ya que React Bootstrap no incluye ninguno.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
