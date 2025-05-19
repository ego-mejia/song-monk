import React from "react";

const ArtistBadges = ({ artistList }) => {
  return artistList.map(({ name, id }, index) => (
    <div className="artist-badges__card" key={index}>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  ));
};

export default ArtistBadges;
