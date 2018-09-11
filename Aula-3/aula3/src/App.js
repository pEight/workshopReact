import React, { Component } from 'react';
import InputDisplay from './Components/InputDisplay/InputDisplay';

// Perceba que App herda de React.Component
class App extends Component {

  // Perceba que esse método nunca é chamado
  componentDidUpdate(){
    console.log("Eu atualizei e sou o APP!");
  }

  // Esses porém são chamados uma vez quando carregamos a página
  componentWillMount(){
    console.log("Eu vou montar e sou o APP!");
  }
  componentDidMount(){
    console.log("Eu montei e sou o APP!");
  }

  //Podemos perceber a composição, na qual usamos InputDisplay para construir App
  render() {
    return (
      <div className="App">
        <h1>Bem vindo a aula 3 do Workshop React da CEOS</h1>
        <InputDisplay />
      </div>
    );
  }
}

export default App;