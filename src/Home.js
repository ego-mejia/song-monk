import React from "react";
import SearchResults from "./components/SearchResults";
import { songsList } from "./components/songsData";
import { useState } from "react";
// import Library from "./components/Library";

// * Renderizar componente padre
const Home = ({ allSongs, loading, error }) => {
  const [library, setLibrary] = useState([]);
  // Renderizar Datos con el Hook

  // Función para agregar canciones a la biblioteca
  const handleAddToLibrary = (song) => {
    // Evita duplicados
    if (
      !library.find((s) => s.title === song.title && s.artist === song.artist)
    ) {
      setLibrary([...library, song]);
    }
  };

  return (
    <>
      <h1>Home screen</h1>
      <SearchResults songList={allSongs} onAddToLibrary={handleAddToLibrary} />
    </>
  );
};

export default Home;
