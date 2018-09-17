import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    render(){
        return(
            <div>
                <h2>I'm a FormsInterface!</h2>
                <FormUnit />
                <FormUnit />
                <FormUnit />
                <FormUnit />
            </div>
        );
    }
}

export default FormsInterface;