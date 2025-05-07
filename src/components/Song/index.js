import React from "react";

const Song = ({ title, artist, album, showButton, onAddToLibrary }) => {
  const song = { title, artist, album };
  return (
    <div className="songs__card">
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{album}</p>
      {showButton && (
        <button
          onClick={() => {
            onAddToLibrary(song);
          }}
        >
          Agregar a mi biblioteca
        </button>
      )}
    </div>
  );
};

export default Song;
