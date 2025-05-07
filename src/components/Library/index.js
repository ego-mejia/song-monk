import React from "react";
import Song from "../Song";

// Componente que renderiza las canciones en la biblioteca del usuario
const Library = ({ songList }) => {
  return (
    <>
      {/* <div className="App__title">
        <h1>Tus Canciones</h1>
      </div> */}
      <section id="Library" className="songs">
        {songList.map(({ title, artist, album }, index) => (
          <Song title={title} artist={artist} album={album} key={index} />
        ))}
      </section>
    </>
  );
};

export default Library;
