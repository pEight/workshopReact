import React from 'react';

const formDisplay = (props) => {
    return(
        <div>
            <h3>Evento: {props.data.name}</h3>
            <button onClick={()=>{props.delete(props.data.id)}}>X</button>
            <button onClick={()=>{props.change(props.data.id)}}>Alterar</button>
            <p>Descrição: {props.data.desc}</p>
            <p>Duração: {props.data.dateI} - {props.data.dateF}</p>
            <p>Local: {props.data.loc}</p>
        </div>
    );
}

export default formDisplay;