import React, {Component} from 'react';

const helloUser = (props) => {
    return(
        <div>
        <p>Bom dia {props.name}!</p>
    </div>
    );
}

export default helloUser;