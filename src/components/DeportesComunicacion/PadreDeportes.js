import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

export default class PadreDeportes extends Component {
    deportes = ["Futbol", "Baloncesto", "Formula 1", "Tenis", "Voleybol"];

    render() {
        return (
            <div>
                <h1 style={{ color: "coral" }}>Padre Deportes</h1>
                {this.deportes.map((deporte, index) => {
                    return <HijoDeportes key={index} nombre={deporte} />;
                })}
                <h4 style={{backgroundColor: "yellow"}}>Su deporte favorito es: </h4>
            </div>
        );
    }
}
