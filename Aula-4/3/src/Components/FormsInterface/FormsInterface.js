import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    state = {
        formUnits: [
            {
                type: "display"
            },
            {
                type: "display"
            },
            {
                type: "input"
            },
            {
                type: "input"
            },
            {
                type: "display"
            }
            
        ]
    }



    render(){
        let formUnits = this.state.formUnits.map((current)=>{
            return <FormUnit type={current.type} />
        });
        return(
            <div>
                <h2>I'm a FormsInterface!</h2>
                {formUnits}
            </div>
        );
    }
}

export default FormsInterface;