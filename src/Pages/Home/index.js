import React from "react";
import { useState } from "react";
import Library from "../../components/Library";
import SearchResults from "../../components/SearchResults";
import SearchBar from "../../components/SearchBar";

import SearchedAlbums from "../../components/SearchedAlbums";
// RENDERIZAR CANCIONES DE ALBUM SELECCIONADO
// import FetchedSongs from "./FetchedSongs";

// Aristas
import { artistList } from "../../data/artistData";
import ArtistCard from "../../components/ArtistCard";

// Style

import {
  HomePage,
  ArtistSection,
  SearchedAlbumSection,
  LibrarySection,
} from "./style";

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
    <HomePage>
      {/* Mandar a Llamar Lista de Artistas con su respectivo ID e imagen */}
      <ArtistSection>

        {/* <section>
          <h1>Artists</h1>
          <ArtistBadges artistList={artistList} />
          <ArtistBadges artistList={artistList} />
        </section> */}
        <div>
          <h1>Artistas</h1>
          {/* <div className="topArtists"> */}
          <div className="topArtist">
            {artistList.map(({ name, img, id }) => (
              <ArtistCard key={id} name={name} img={img} id={id} />
            ))}
            {/* </div> */}
          </div>
        </div>

      </ArtistSection>

      <SearchedAlbumSection>
        <h1>Albums</h1>

        {/* -------- Album Search bar by artist ID*/}
        {/* <SearchBar formData={formData} setFormData={setFormData} /> */}

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
      </SearchedAlbumSection>

      {/* LIBRERÍA DE ÁLBUMES SELECCIONADOS */}
      <LibrarySection>
        <h1>Library</h1>
        <Library></Library>
      </LibrarySection>
    </HomePage>
  );
};

export default Home;
