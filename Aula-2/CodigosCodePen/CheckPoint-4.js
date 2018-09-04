class HelloMaker extends React.Component {
    render(){
        return(
            <div>
                <input type="text" />
                <button >Diga bom dia!</button>
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

// ----------------------------------------------------------------
ReactDOM.render(<App />, document.getElementById('root'));