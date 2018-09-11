import React,{Component} from 'react';

// Perceba que InputDisplay herda de React.Component
class InputDisplay extends Component {

    // O valor inicial do estado do InputDisplay é uma string vazia
    // É feito um two way binding com o valor do input no metodo render()
    state = {
        valorAtual: ""
    }


    // Os métodos abaixo são chamados conforme o componente é montado e atualizado
    componentWillMount(){
        console.log("Eu vou montar e sou o INPUTDISPLAY!");
    }

    componentDidMount(){
        console.log("Eu montei e sou o INPUTDISPLAY!");
    }

    componentWillUpdate(){
        console.log("Eu vou atualizar e sou o INPUTDISPLAY!");
    }

    componentDidUpdate(){
        console.log("Eu atualizei e sou o INPUTDISPLAY!");
    }

    // Essa função é chamada quando mudamos o valor do input
    atualizarEstado = (event) => {
        this.setState({
            valorAtual: event.target.value
        });
    }


    // Essa função é chamada ao apertar o botão
    zerarTudo = () => {
        this.setState({
            valorAtual: ""
        });
    }

    render(){
        return(
            <div>
                <h2>{this.state.valorAtual}</h2>
                <input 
                    type="text" 
                    value={this.state.valorAtual}
                    onChange={this.atualizarEstado}
                    />
                <button
                    onClick={this.zerarTudo}>Zerar Tudo!!!</button>
            </div>
        );
    }

}

export default InputDisplay;