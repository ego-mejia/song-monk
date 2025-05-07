import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.css";
// Components
import Header from "./components/Header";
import Home from "./Pages/Home";
import SongDetails from "./Pages/SongDetails";
// Hooks
import useFetch from "./hooks/useFetch";
// Data
import { songsList } from "./components/SongsData";

const App = () => {
  // * Manejar los datos en el componente padre
  const { allSongs, loading, error } = useFetch(songsList);
  const [librarySongs, setLibrarySongs] = useState([]);
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allSongs={allSongs}
              loading={loading}
              error={error}
              librarySongs={librarySongs}
              setLibrarySongs={setLibrarySongs}
            />
          }
        />
        <Route path="/song" element={<SongDetails />} />
      </Routes>
    </div>
  );
};

export default App;
