import React, { Component } from 'react';
import HelloUser from './Components/HelloUser/HelloUser';
import HelloMaker from './Components/HelloMaker/HelloMaker';

class App extends Component {

  state = {
    listaDeMembros: ["Gabriel Suassuna", 
    "Vinicius Somebody","Pedro Victor","Matheus Navarro","Luan Carvalho","Hariamy Vasconcelos","João Pedro Delgado"]
  }
  render() { 
    const listaDeComponentes = this.state.listaDeMembros.map((atual)=>{
      return <HelloUser name={atual} key={atual}/>
    });
    return (
      <div>
        <p>Hello World!</p>
        <HelloMaker />
        {listaDeComponentes}
      </div>
    );
  }

}

export default App;