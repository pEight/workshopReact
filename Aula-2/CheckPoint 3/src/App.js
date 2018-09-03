import React, { Component } from 'react';
import HelloUser from './Components/HelloUser/HelloUser';

class App extends Component {

  render() {
    const listaDeMembros = ["Gabriel Suassuna", 
    "Vinicius Somebody","Pedro Victor","Matheus Navarro","Luan Carvalho","Hariamy Vasconcelos","João Pedro Delgado"];
  
    const listaDeComponentes = listaDeMembros.map((atual)=>{
      return <HelloUser name={atual}/>
  });

    return (
      <div>

        <p>Hello World!</p>
        {listaDeComponentes}
      </div>
    );
  }

}

export default App;