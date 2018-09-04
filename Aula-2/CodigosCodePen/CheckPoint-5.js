class HelloMaker extends React.Component {
    state = {
        currentValue: ""
    }

    updateCurrentValue = (event) => {
        this.setState({
            currentValue: event.target.value
        });
    }

    triggerCreateNewHelloUser = () => {
        this.props.createNewHelloUser(this.state.currentValue);
        this.setState({
            currentValue: ""
        });
    }
    render(){
        return(
            <div>
                <input onChange={this.updateCurrentValue} type="text" value={this.state.currentValue} type="text" />
                <button onClick={this.triggerCreateNewHelloUser}>Diga bom dia!</button>
            </div>
        );
    };
}


// ----------------------------------------------------------------

class HelloUser extends React.Component {
    render(){
        return(
            <div>
                <p>Bom dia {this.props.name}!</p>
            </div>
        );
    }
}

// ----------------------------------------------------------------

class App extends React.Component {

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

// ----------------------------------------------------------------
ReactDOM.render(<App />, document.getElementById('root'));