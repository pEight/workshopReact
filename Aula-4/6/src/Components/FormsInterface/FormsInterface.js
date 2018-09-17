import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    state = {
        formUnits: []
    }

    createUniqueId = () => {
        return Math.random().toString(36).substr(2, 16);
    }

    createNewForm = () => {
        let tempState = {...this.state};
        tempState.formUnits.push(
            {
                type: "input",
                id: this.createUniqueId(),
                name: "",
                desc: "",
                dateI: "",
                dateF: "",
                loc: ""
            }
        );
        this.setState({
            ...tempState
        });
    }

    render(){
        let formUnits = this.state.formUnits.map((current)=>{
            return <FormUnit data={current} key={current.id}/>
        });
        return(
            <div>
                <h2>I'm a FormsInterface!</h2>
                <button onClick={this.createNewForm}>Create New Form</button>
                {formUnits}
            </div>
        );
    }
}

export default FormsInterface;