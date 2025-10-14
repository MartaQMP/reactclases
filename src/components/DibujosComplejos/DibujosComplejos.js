import { Component } from "react";

export default class DibujosComplejos extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(Math.random() * 100 + 1);
            //MEDIANTE PUSH VAMOS AÑADIENDO ELEMENTOS A LA LISTA
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "olive" }}>Dibujos Dinamicos React</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        );
    }
}
