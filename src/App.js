import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
// import SearchResults from "./components/SearchResults";
// import Library from "./components/Library";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./style/main.css";
import useFetch from "./hooks/useFetch";
// import Song from "./components/Song";
import { songsList } from "./components/songsData";

const App = () => {
  const { allSongs, loading, error } = useFetch(songsList);

  /*
* Buscar Album por artista
https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=artist_name

ej. artist_name=oasis

* Detalles de Album específico
https://theaudiodb.com/api/v1/json/2/album.php?m=id_album
ej. "Definitely Maybe" (ID: 2115888)

Documentación API
https://www.theaudiodb.com/free_music_api
*/

  /*
  TODO: Define dos rutas principales
  TODO: /: Página principal que mostrará los resultados de búsqueda. 
  TODO: /song/:id: Página que mostrará los detalles de una canción específica.
   */
  return (
    <div className="App">
      <Header />
      {/* <SearchResults songList={allSongs} onAddToLibrary={handleAddToLibrary} /> */}
      {/* <div className="Library"> */}
      {/* <Library songList={library} /> */}
      {/* </div> */}
      <Routes>
        <Route
          path="/"
          element={<Home allSongs={allSongs} loading={loading} error={error} />}
        />
        {/* <Route path="/song" element={<Song />} /> */}
      </Routes>
    </div>
  );
};

export default App;
