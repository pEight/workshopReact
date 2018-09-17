import React, {Component} from 'react';
import FormUnit from '../FormUnit/FormUnit';

class FormsInterface extends Component{
    state = {
        formUnits: [
            {
                type: "input",
                name: "Primeiro Evento",
                desc: "Sou o Primeiro Evento!",
                dateI: "1999-06-23",
                dateF: "2018-09-17",
                loc: "Aqui Mesmo!"
            },
            {
                type: "input",
                name: "",
                desc: "",
                dateI: "",
                dateF: "",
                loc: ""
            },
            {
                type: "display",
                name: "WorkShop React",
                desc: "Primeiro workshop de react da CEOS!",
                dateI: "2018-09-19",
                dateF: "2018-10-31",
                loc: "LEC-02"
            },
        ]
    }



    render(){
        let formUnits = this.state.formUnits.map((current)=>{
            return <FormUnit data={current} />
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