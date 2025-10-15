import { Component } from "react";

export default class HijoDeportes extends Component {
    // state = {
    //         favorito: "",
    //     };
    //     mostrarFavorito = () => {
    //         this.setState({
    //             favorito: this.props.nombre,
    //         });
    //         return this.state.favorito;
    //     };

    //CON ESTE METODO LLAMO A LOS PROPS Q SE PASARON EN EL PADRE Y LE DIGO Q EL FAVORITO ES EL NOMBRE
    cogerFavorito = () => {
        //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT EN PROPS
        let deporte = this.props.nombre
        this.props.seleccionarfavorito(deporte)
    };

    render() {
        return (
            <div>
                <h3 style={{ color: "magenta" }}>Deporte: {this.props.nombre}</h3>
                <button onClick={this.cogerFavorito}>Selecionar favorito</button>
            </div>
        );
    }
}
