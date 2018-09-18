import React from 'react';
import FormDisplay from '../FormDisplay/FormDisplay';
import FormInput from '../FormInput/FormInput';

const formUnit = (props) => {
    let renderedComponent = props.data.type == "display" ? <FormDisplay data={{...props.data}} delete={props.delete}/> : <FormInput data={{...props.data}} delete={props.delete} update={props.update}/>;
    return(
        <div>
            <h3>I'm a FormUnit!</h3>
            {renderedComponent}
        </div>
    );
}

export default formUnit;