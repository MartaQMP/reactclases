import React, { Component } from "react";

export default class HijoNumeros extends Component {
    //ESTE METODO ES SOLO PARA LLAMAR AL METODO DEL PADRE Y Q LO HAGA
    realizarSuma = () => {
        //LO TRANSFORMO EN NUMERO POR SI ACASO
        this.props.hacerSuma(parseInt(this.props.numero));
    };

    render() {
        return (
            <div>
                <h3 style={{ color: "red" }}>Numero: {this.props.numero} </h3>
                <button onClick={this.realizarSuma}>Sumar: {this.props.numero}</button>
            </div>
        );
    }
}
