import React from "react";
import { useState } from "react";
import Library from "../components/Library";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";
// Lista de Artistas
import { artistList } from "../data/artistData";
import ArtistBadges from "../components/ArtistBadges";
import SearchedAlbums from "../components/SearchedAlbums";
// * Renderizar componente padre
const Home = ({
  albumsList,
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
      {/* <h1>Library</h1> */}
      {/* <Library songList={librarySongs} /> */}

      <h1>Home screen</h1>

      {/* -------- Artist badges with IDs*/}
      <section className="artist-badges">
        <h3>Artistas</h3>
        <div className="artist-badges__container">
          <div className="artist-badges__track">
            <ArtistBadges artistList={artistList} />
            <ArtistBadges artistList={artistList} />
          </div>
        </div>
      </section>

      {/* -------- Album Search bar by artist ID*/}
      <SearchBar formData={formData} setFormData={setFormData} />

      {error ? (
        <p>{error}</p>
      ) : albumsList.length === 0 ? (
        <></>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        /* -------- Render Album Cards*/
        <SearchedAlbums albumsList={albumsList} />
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
