import { Component } from "react";

export default class HijoDeportes extends Component {
    state = {
        favorito: "",
    };
    mostrarFavorito = () => {
        this.setState({
            favorito: this.props.nombre,
        });
        return this.state.favorito;
    };

    render() {
        return (
            <div>
                <h3 style={{ color: "magenta" }}>Deporte: {this.props.nombre}</h3>
                <button onClick={this.mostrarFavorito}>Selecionar favorito</button>
                <h4 style={{ backgroundColor: "yellow" }}>Su deporte favorito es: {this.state.favorito}</h4>
            </div>
        );
    }
}
