import React, { Component } from "react";
import HijoNumeros from "./HijoNumeros";

export default class PadreNumeros extends Component {
    state = {
        numeros: [5, 11, 56, 23],
        suma: 0,
    };

    añadirNumero = () => {
        //CREO EL NUMERO
        let nuevonumero = parseInt(Math.random() * 100 + 1);
        //HAGO EL PUSH PARA AÑADIR
        this.state.numeros.push(nuevonumero);
        //'REFRESCO' LOS NUMEROS
        this.setState({
            numeros: this.state.numeros,
        });
    };

    //AQUI HAGO LA SUMA
    sumarNumero = numeroAsumar => {
        let total = this.state.suma + numeroAsumar;
        this.setState({
            suma: total,
        });
    };
    render() {
        return (
            <div>
                <h1>PadreNumeros</h1>
                <h2 style={{ backgroundColor: "yellow" }}>La suma es {this.state.suma}</h2>
                <button onClick={this.añadirNumero}>Generar numero</button>
                {this.state.numeros.map((numero, index) => {
                    //AQUI HAGO UN PROPS Q LLAME A LA FUNCION PARA Q DESDE EL HIJO LLAME AL PROPS
                    return <HijoNumeros numero={numero} key={index} hacerSuma={this.sumarNumero} />;
                })}
            </div>
        );
    }
}
