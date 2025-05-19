// src/components/ArtistCard.jsx
import React from "react";

const ArtistCard = ({ name, img, id }) => {
  return (
    <div className="topArtist__card">
      <img src={img} alt={name} width={150} height={150} />
      <h3>{name}</h3>
      <p>ID: {id}</p>
    </div>
  );
};

export default ArtistCard;
