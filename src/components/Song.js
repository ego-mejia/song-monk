import React from "react";

const Song = ({ title, artist, album }) => {
  return (
    <div className="songs__card">
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{album}</p>
    </div>
  );
};

export default Song;
