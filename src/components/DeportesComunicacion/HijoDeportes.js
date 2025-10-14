import { Component } from "react";

export default class HijoDeportes extends Component {
    
    //CON ESTE METODO LLAMO A LOS PROPS Q SE PASARON EN EL PADRE Y LE DIGO Q EL FAVORITO ES EL NOMBRE
    mostrarFavorito = () => {
        this.props.seleccionarfavorito(this.props.nombre)
    };

    render() {
        return (
            <div>
                <h3 style={{ color: "magenta" }}>Deporte: {this.props.nombre}</h3>
                <button onClick={this.mostrarFavorito}>Selecionar favorito</button>
            </div>
        );
    }
}
