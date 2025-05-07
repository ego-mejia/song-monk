import React from "react";
import { useState } from "react";
import Library from "../components/Library";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";
// Lista de Artistas
import { artistList } from "../components/ArtistData";
import Artists from "../components/Artists";
// * Renderizar componente padre
const Home = ({
  fetchedAlbums,
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

      <section className="artists">
        <h3>Artistas</h3>
        <div className="artists__grid">
          <Artists artistList={artistList} />
        </div>
      </section>

      <SearchBar formData={formData} setFormData={setFormData} />
      {error ? (
        <p>{error}</p>
      ) : (
        <p>Data importada correctamente</p>
        // ! Este componente renderiza los Albums, canciones, etc
        // TODO: pendiente de corregir.

        // <SearchResults
        //   albumList={fetchedAlbums}
        //   onAddToLibrary={handleAddToLibrary}
        //   formData={formData}
        // />
      )}
    </>
  );
};

export default Home;
