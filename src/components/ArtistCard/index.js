// src/components/ArtistCard.jsx
import React from "react";
import useArtistDetails from "../../hooks/useArtistDetails";

const ArtistCard = ({ name, id }) => {
  const { fetchedArtist, loadingArtist, errorArtist } = useArtistDetails(id);

  if (loadingArtist) return <div>Cargando {name}…</div>;
  if (errorArtist) return;

  // fetchedArtist es un array [{…}] según la API, por ejemplo:
  const artist = fetchedArtist[0] || {};

  return (
    <div className="topArtist__card">
      <img
        src={artist.strArtistThumb}
        alt={artist.strArtist}
        width={150}
        height={150}
      />
      <h3>{artist.strArtist}</h3>
      <p>ID: {artist.idArtist}</p>
      {/* y cualquier otra propiedad */}
    </div>
  );
};

export default ArtistCard;
