import { Component } from "react";

export default class DibujosComplejosRender extends Component {
    //NECESITAMOS UN ARRAY CON NOMBRES Y DICHO ARRAY  DEBE ESTAR
    //DECLARADO EN state PARA ACTUALIZAR EL DIBUJO
    state = {
        nombres: ["Marta", "Diana", "Ana", "Pedro", "Fernando"],
    };

    generarNombre = () => {
        // SON DOS ACCIONES DISTINTAS TENGO Q AÑADIRLO Y LUEGO
        // ACTUALIZAR EL RENDER CON EL SET

        /*PRIMERO AÑADO*/
        this.state.nombres.push("NUEVO NOMBRE");
        /*LUEGO HAGO EL SET*/
        this.setState({
            nombres: this.state.nombres,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "darkblue" }}>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>Generar nuevo nombre</button>
                {
                    //ESTE CODIGO ES JSX DE REACT
                    //EL CODIGO LOGICO DEBE CONTENER UN RETURN
                    this.state.nombres.map((nombre, index) => {
                        //ESTE CODIGO NO PUEDE ESTAR VACIO
                        return (
                            <h3 style={{ color: "lime" }} key={index}>
                                {nombre}
                            </h3>
                        );
                    })
                }
            </div>
        );
    }
}
