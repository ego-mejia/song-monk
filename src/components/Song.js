// Crea un componente de clase que recibe props para mostrar la información de una canción (título, artista, duración).
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Good Good",
      artist: "Usher, Summer Walker & 21 Savage",
      album: "Coming Home",
    };
  }

  render() {
    return <div></div>;
  }
}

export default Song;
