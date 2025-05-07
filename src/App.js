import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { songsList } from "./components/songsData";
import axios from "axios";

import "./style/main.css";

const App = () => {
  const [allSongs, setallSongs] = useState([]);
  const [library, setLibrary] = useState([]);

  // Función para agregar canciones a la biblioteca
  const handleAddToLibrary = (song) => {
    // Evita duplicados
    if (
      !library.find((s) => s.title === song.title && s.artist === song.artist)
    ) {
      setLibrary([...library, song]);
    }
  };
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

  // * Importar data con axios.
  useEffect(() => {
    const fetchAlbumsByArtist = async () => {
      try {
        console.log("fetching data...");
        // const response = await axios.get(
        //   "https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=oasis"
        // );
        // setallSongs(response.data);
        // console.log(response.data);
        setallSongs(songsList);
        console.log(songsList);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchAlbumsByArtist();
  }, []);

  return (
    <div className="App">
      <Header />

      <SearchResults songList={allSongs} onAddToLibrary={handleAddToLibrary} />
      {/* <div className="Library"> */}
      <Library songList={library} />
      {/* </div> */}
    </div>
  );
};

export default App;
