// En este componente va a ir la lista de artistas con su respectivo ID para buscar.
import React from "react";
import Artists from "../components/Artists";
import { artistList } from "../data/artistData";
import ArtistCard from "../components/ArtistCard";

const ArtistInformation = () => {
  return (
    <div>
      <h1>Información de Artistas</h1>
      {/* <div className="topArtists"> */}
      <div className="topArtist">
        {artistList.map(({ name, img, id }) => (
          <ArtistCard key={id} name={name} img={img} id={id} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ArtistInformation;
