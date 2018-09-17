import React from 'react';

const formInput = (props) => {
    return(
        <div>  
            <p>I'm a FormInput!</p>
            <button onClick={()=>{props.delete(props.data.id)}}>X</button>
            <input type="text" placeholder="Nome do Evento" value={props.data.name}/>
            <input type="text" placeholder="Descricao do Evento" value={props.data.desc}/>
            De:<input type="date" value={props.data.dateI}/>
            Até:<input type="date" value={props.data.dateF}/>
            <input type="text" placeholder="Local" value={props.data.loc}/>
        </div>
    );
}

export default formInput;