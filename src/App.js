import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Songs from "./components/SearchResults";
import Library from "./components/Library";
import { songsList } from "./components/songsData";

import "./style/main.css";

// console.log("La app está lista para Monkear!🤘");
// songsList.slice(0, Math.floor(songsList.length / 2))

const App = () => {
  const [allSongs, setallSongs] = useState([]);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const fetchSongs = () => {
      console.log("fetching data...");
      setallSongs(songsList);
      console.log("La app está lista para Monkear!🤘");
    };
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App__title">
        <h1>Ponte Monk!</h1>
      </div>
      {/* <Songs songList={this.state.allSongs} />
      <Library songList={this.state.librarySongs} /> */}
    </div>
  );
};

export default App;
