import React from "react";
import { useState } from "react";
import Library from "../components/Library";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";
// Lista de Artistas
import { artistList } from "../data/artistData";
import ArtistBadges from "../components/ArtistBadges";
import SearchedAlbums from "../components/SearchedAlbums";
// RENDERIZAR CANCIONES DE ALBUM SELECCIONADO
// import FetchedSongs from "./FetchedSongs";

// * Renderizar componente padre
const Home = ({
  albumsList,
  loading,
  error,
  librarySongs,
  setLibrarySongs,
  formData,
  setFormData,
  selectedAlbum,
  setSelectedAlbum,
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

      {/* {error ? (
        <p>{error}</p>
      ) : albumsList.length === 0 ? (
        <></>
      ) : loading ? (
        <p>Loading...</p>
      ) : ( */}

      {/* INICIA LÓGICA DE RENDERIZADO DE ÁLBUMES */}
      {error ? (
        <>
          <p>{error}</p>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : !albumsList || albumsList.length === 0 ? (
        <>
          <p>Artist ID no existe.</p>
        </>
      ) : (
        <SearchedAlbums
          albumsList={albumsList}
          selectedAlbum={selectedAlbum}
          setSelectedAlbum={setSelectedAlbum}
        />
      )}
      {/* TERMINA LOGICA DE RENDERIZADO DE ÁLBUMES */}

      {/* LOGICA PARA RENDERIZAR LAS CANCIONES SELECCIONADAS */}
      {/* 1.- Solamente si existe selectedAlbum, es decir si no es null, renderizar */}
      {/* 1.1.- El fetch de Data se hace en App.js al momento de actualiarse el valor. */}
      {/* 1.2.-Solamente si hay un cambio en el Selected ALbum ID, realizar el fetch. */}
      {/* 1.2.1.- Mandar lista de fetched Songs al componente Home, luego consumirlo en fetchedSongs. */}
      {/* 2.- Se renderiza componente de FetchedSongs el cual toma consume la lista de canciones y sus datos*/}
      {/* {selectedAlbum ? (
        <FetchedSongs closeModal={closeModal} selectedAlbum={selectedAlbum} />
      ) : (
        <p>NADA</p>
      )} */}
    </>
  );
};

export default Home;
