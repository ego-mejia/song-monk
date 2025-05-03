import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { songsList } from "./components/songsData";

import "./style/main.css";

// console.log("La app está lista para Monkear!🤘");
// songsList.slice(0, Math.floor(songsList.length / 2))

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

  useEffect(() => {
    const fetchSongs = () => {
      console.log("fetching data...");
      setallSongs(songsList);
      console.log(songsList);
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    console.log("La app está lista para Monkear!🤘");
  }, [App]);

  return (
    <div className="App">
      <Header />
      <div className="App__title">
        <h1>Ponte Monk!</h1>
      </div>
      <SearchResults songList={allSongs} onAddToLibrary={handleAddToLibrary} />
      <div className="Library">
        <h1>Tus Canciones</h1>
        <Library songList={library} />
      </div>
    </div>
  );
};

export default App;
