import React from 'react';
import FormDisplay from '../FormDisplay/FormDisplay';
import FormInput from '../FormInput/FormInput';

const formUnit = (props) => {
    let renderedComponent = props.type == "display" ? <FormDisplay /> : <FormInput />;
    return(
        <div>
            <h3>I'm a FormUnit!</h3>
            {renderedComponent}
        </div>
    );
}

export default formUnit;