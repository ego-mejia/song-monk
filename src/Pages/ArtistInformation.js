// En este componente va a ir la lista de artistas con su respectivo ID para buscar.
import React from "react";
import Artists from "../components/Artists";
import { artistList } from "../components/ArtistData";

const ArtistInformation = () => {
  return (
    <div>
      <h1>Información de Artistas</h1>
      <div className="topArtists">
        <Artists artistList={artistList} className="topArtists" />
      </div>
      {/* Tal vez sea interesante agregar, como grid */}
    </div>
  );
};

export default ArtistInformation;
