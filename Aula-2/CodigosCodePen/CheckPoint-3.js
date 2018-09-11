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

// ----------------------------------------------------------------
ReactDOM.render(<App />, document.getElementById('root'));