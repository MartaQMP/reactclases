import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

export default class PadreDeportes extends Component {
    //GUARDO EL FAVORITO
    state = {
        favorito: "",
    };
    deportes = ["Futbol", "Baloncesto", "Formula 1", "Tenis", "Voleybol"];

    cambiarFavorito = deporte => {
        this.setState({
            favorito: deporte,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "coral" }}>Padre Deportes</h1>
                {this.deportes.map((deporte, index) => {
                    return <HijoDeportes key={index} nombre={deporte} seleccionarfavorito={this.cambiarFavorito} />;
                })}
                <h4 style={{ backgroundColor: "yellow" }}>Su deporte favorito es: {this.state.favorito}</h4>
            </div>
        );
    }
}
