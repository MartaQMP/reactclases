import React, { Component } from "react";

export default class Comic extends Component {
    //HIJO
    escogerFavorito = () => {
        this.props.elegirfavorito(this.props.comic);
    };

    mandarEliminar = () => {
        this.props.eliminar(parseInt(this.props.index));
    };

    render() {
        return (
            <div>
                <h3 style={{ color: "coral" }}>{this.props.comic.titulo}</h3>
                <img src={this.props.comic.imagen} width="200px" alt="Imagen comic"></img>
                <p>{this.props.comic.descripcion}</p>
                <button onClick={this.escogerFavorito}>Seleccionar favorito</button>
                <button onClick={this.mandarEliminar} style={{ backgroundColor: "red", color: "white" }}>
                    Eliminar
                </button>
                <hr />
            </div>
        );
    }
}
