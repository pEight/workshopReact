import React, { Component } from 'react';
import HelloUser from './Components/HelloUser/HelloUser';
import HelloMaker from './Components/HelloMaker/HelloMaker';

class App extends Component {

  state = {
    listaDeMembros: ["Gabriel Suassuna", "Vinicius Somebody","Pedro Victor","Matheus Navarro","Luan Carvalho","Hariamy Vasconcelos","João Pedro Delgado"]
  }

  createNewHelloUser = (newUser) => {
    let listaTemporaria = [...this.state.listaDeMembros];
    listaTemporaria.push(newUser);
    this.setState({
      listaDeMembros: listaTemporaria
    });
  }

  render() { 
    const listaDeComponentes = this.state.listaDeMembros.map((atual)=>{
      return <HelloUser name={atual} key={atual}/>
    });

    return (
      <div>
        <p>Hello World!</p>
        <HelloMaker createNewHelloUser={this.createNewHelloUser}/>
        {listaDeComponentes}
      </div>
    );
  }

}

export default App;
