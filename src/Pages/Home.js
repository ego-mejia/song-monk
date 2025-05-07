import React from "react";
import { useState } from "react";
import Library from "../components/Library";
import SearchResults from "../components/SearchResults";

// * Renderizar componente padre
const Home = ({ allSongs, loading, error, librarySongs, setLibrarySongs }) => {
  // Función para agregar canciones a la biblioteca
  const handleAddToLibrary = (song) => {
    // Evita duplicados
    if (
      !librarySongs.find(
        (s) => s.title === song.title && s.artist === song.artist
      )
    ) {
      setLibrarySongs([...librarySongs, song]);
    }
  };
  //TODO: agregar render condicional al componente de SearchResults en caso de no errores.
  return (
    <>
      <h1>Library</h1>
      <Library songList={librarySongs} />
      <h1>Home screen</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <SearchResults
          songList={allSongs}
          onAddToLibrary={handleAddToLibrary}
        />
      )}
    </>
  );
};

export default Home;
