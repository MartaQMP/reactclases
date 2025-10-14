import { Component } from "react";

//PODEMOS UTILIAR METODOS FUERA DE LA CLASE
//DICHOS METODOS NO PUEDEN UTILIZAR NADA DEL COMPONENT
function metodoAbsurdo() {
    console.log("Metodo sin funcionalidad");
}

export default class Contador extends Component {
    //LAS VARIABLES SE DECLARA A NIVEL CALSE SIN var,let o const
    numero = 1;
    //CON LOS METODOS SUCEDE LO MISMO, SOLO LA DECLARACION
    incrementarNumero = () => {
        //PARA ACCEDER A LAS VARIABLES DE LA CLASE SE USA this
        this.numero += 1;
        console.log("Valor del numero: " + this.numero);
    };

    //LAS VARIBLE STATE SON DECLARADAS EN EL OBJETO DE LA CLASE
    state = {
        valor: parseInt(this.props.inicio),
    };

    incrementarValor = () => {
        //EN SETSTATE SE MODIFICAN OBJETOS CON SU KEY: VALUE
        this.setState({
            valor: this.state.valor + 1,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "purple" }}>Contador JSX: {this.props.inicio}</h1>
                <h3 style={{ color: "blue" }}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>Incrementar valor</button>
                {/* LA LLAMADA A LOS METODOS SE REALIZA CON this 
                Y NO SE UTILIZA NI LAMBDA NI PARENTESIS*/}
                <button onClick={this.incrementarNumero}>Incrementar numero</button>
                {/* TENEMOS MULTIPLES FORMAS DE REALIZAR LLAMADAS */}
                <button
                    onClick={() => {
                        metodoAbsurdo();
                        this.incrementarNumero();
                    }}>
                    Otra sintaxis de funcion anonima
                </button>
            </div>
        );
    }
}
