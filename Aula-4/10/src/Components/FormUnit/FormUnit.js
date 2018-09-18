import React from 'react';
import FormDisplay from '../FormDisplay/FormDisplay';
import FormInput from '../FormInput/FormInput';

const formUnit = (props) => {
    let renderedComponent = props.data.type == "display" ? 
            <FormDisplay data={{...props.data}} 
                         delete={props.delete} 
                         change={props.change}/> 
            : <FormInput data={{...props.data}} 
                         delete={props.delete} 
                         update={props.update} 
                         change={props.change}/>;
    return(
        <div style={{display:'block', border: '5px solid black'}}>
            <h3>I'm a FormUnit!</h3>
            {renderedComponent}
        </div>
    );
}

export default formUnit;