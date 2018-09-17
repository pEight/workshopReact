import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    state = {
        formUnits: []
    }

    createUniqueId = () => {
        return Math.random().toString(36).substr(2, 16);
    }

    createForm = () => {
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

    removeForm = (formId) => {
        let tempState = {...this.state};
        let arrayOfForms = tempState.formUnits.map((current)=>(current.id));
        let index = arrayOfForms.indexOf(formId);
        tempState.formUnits.splice(index, 1);
        this.setState({
            ...tempState
        });    
    }

    render(){
        let formUnits = this.state.formUnits.map((current)=>{
            return <FormUnit data={current} key={current.id} delete={this.removeForm}/>
        });
        return(
            <div>
                <h2>I'm a FormsInterface!</h2>
                <button onClick={this.createForm}>Create New Form</button>
                {formUnits}
            </div>
        );
    }
}

export default FormsInterface;