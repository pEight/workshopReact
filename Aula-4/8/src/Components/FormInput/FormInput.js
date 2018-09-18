import React from 'react';

const formInput = (props) => {
    return(
        <div>  
            <p>I'm a FormInput!</p>
            <button onClick={()=>{props.delete(props.data.id)}}>X</button>
            <input type="text" placeholder="Nome do Evento" value={props.data.name} onChange={(e)=>{props.update("name", props.data.id, e)}}/>
            <input type="text" placeholder="Descricao do Evento" value={props.data.desc} onChange={(e)=>{props.update("desc", props.data.id, e)}}/> 
            De:<input type="date" value={props.data.dateI} onChange={(e)=>{props.update("dateI", props.data.id, e)}}/>
            Até:<input type="date" value={props.data.dateF} onChange={(e)=>{props.update("dateF", props.data.id, e)}}/>
            <input type="text" placeholder="Local" value={props.data.loc} onChange={(e)=>{props.update("loc", props.data.id, e)}}/>
        </div>
    );
}

export default formInput;