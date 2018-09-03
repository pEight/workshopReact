import React,{Component} from 'react';

class HelloMaker extends Component {
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

export default HelloMaker;