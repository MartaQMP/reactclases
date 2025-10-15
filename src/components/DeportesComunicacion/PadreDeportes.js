import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

export default class PadreDeportes extends Component {
    deportes = ["Futbol", "Baloncesto", "Formula 1", "Tenis", "Voleybol"];

    //GUARDO EL FAVORITO EN VARIABLE STATE
    state = {
        favorito: "",
    };
    //DEBEMOS TENER UN METODO QUE SEA INVOCADO POR EL HIJO 
    //AL PULSAR SOBRE EL BOTON SELECCIONAR
    cambiarFavorito = deporteSeleccionado => {
        this.setState({
            favorito: deporteSeleccionado,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "coral" }}>Padre Deportes</h1>
                {this.deportes.map((deporte, index) => {
                    //ENLAZO LA ACCION DEL PADRE AL HIJO PARA SELECCIONARLO
                    return <HijoDeportes key={index} nombre={deporte} seleccionarfavorito={this.cambiarFavorito} />;
                })}
                <h4 style={{ backgroundColor: "yellow" }}>Su deporte favorito es: {this.state.favorito}</h4>
            </div>
        );
    }
}
