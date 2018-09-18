import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    state = {
        formUnits: []
    }

    createForm = () => {
        let tempState = {...this.state};
        tempState.formUnits.push(
            {
                type: "input",
                id: Math.random().toString(36).substr(2, 16),
                name: "",
                desc: "",
                dateI: "",
                dateF: "",
                loc: ""
            }
        );
        this.setState({...tempState});
    }

    removeForm = (formId) => {
        let tempState = {...this.state};
        let index = tempState.formUnits.map((current)=>(current.id)).indexOf(formId);
        tempState.formUnits.splice(index, 1);
        this.setState({...tempState});    
    }

    updateForm = (formField, formId, e) => {
        let tempState = {...this.state};
        let arrayOfForms = tempState.formUnits.map((current)=>(current.id));
        let index = arrayOfForms.indexOf(formId);
        tempState.formUnits[index][formField] = e.target.value;
        this.setState({
            ...tempState
        });
    }

    changeType = (formId) => {
        let tempState = {...this.state};
        let index = tempState.formUnits.map((current)=>(current.id)).indexOf(formId);
        tempState.formUnits[index].type = (tempState.formUnits[index].type == "display") ? "input" : "display";
        this.setState({...tempState}); 
    }

    render(){
        let formUnits = this.state.formUnits.map((current)=>{
            return <FormUnit data={current} key={current.id} delete={this.removeForm} update={this.updateForm} change={this.changeType}/>
        });
        return(
            <div>
                <h2>I'm a FormsInterface!</h2>
                <h3>Feel free to create and change your events!</h3> 
                <button onClick={this.createForm}>Create New Form</button>
                {formUnits}
            </div>
        );
    }
}

export default FormsInterface;