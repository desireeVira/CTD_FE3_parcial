import React from 'react';
import data from './data.json';
import Historial from './Historial';
import Opcion from './Opcion';

export default class Main extends React.Component{

    state={
        text: "",
        opciones: [],
        contador: 1,
        opcion: null
    }

    componentDidMount(){
        this.setState({
            text: data[0],
            opciones: [data[0].opciones.a, data[0].opciones.b],
            contador: 1,
            opcion: null
        })
    }

    ManejadorClick = (evento) => {
        if(this.state.contador < 5){
            let BuscarId = String(this.state.contador + 1) + evento.target.value.toLowerCase();
            let historia = data.find(e => e.id === BuscarId)
            this.setState(prevstate => ({ 
                contador: prevstate.contador + 1,
                text: historia,
                opciones: [ historia.opciones.a, historia.opciones.b],
                opcion: evento.target.value
            }));
        }else{
            alert("Fin")
        }
    }

    render(){
        return (
            <div className="layout">
                <h2 className="historia">{this.state.text.historia}</h2>
                <div className="opciones">
                    {this.state.opciones.map((elemento, index) => <Opcion key={index} texto={index? "B" : "A"} opcion={elemento} onClick={this.ManejadorClick}/> )}
                </div>
                <Historial seleccionAnterior={this.state.opcion} />
            </div>
        );
    }
}