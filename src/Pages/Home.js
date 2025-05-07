import React from "react";
import { useState } from "react";
import Library from "../components/Library";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";

// * Renderizar componente padre
const Home = ({
  allSongs,
  loading,
  error,
  librarySongs,
  setLibrarySongs,
  formData,
  setFormData,
}) => {
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

  return (
    <>
      <h1>Library</h1>
      <Library songList={librarySongs} />
      <h1>Home screen</h1>
      <SearchBar formData={formData} setFormData={setFormData} />
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
