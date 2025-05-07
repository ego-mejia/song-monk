import React from "react";
import Song from "./Song";

// Componente que renderiza todas las canciones
const SearchResults = ({ songList, onAddToLibrary }) => {
  return (
    <>
      {/* <div className="App__title">
        <h1>Ponte Monk!</h1>
      </div> */}
      <section id="searchResults" className="songs">
        {songList.map(({ title, artist, album }, index) => (
          <Song
            title={title}
            artist={artist}
            album={album}
            showButton={true}
            onAddToLibrary={onAddToLibrary}
            key={index}
          />
        ))}
      </section>
    </>
  );
};

export default SearchResults;
