import React, { Component } from "react";
import Header from "./components/Header";
import Songs from "./components/SearchResults";
import Library from "./components/Library";
import { songsList } from "./components/songsData";

import "./style/main.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allSongs: songsList,
      librarySongs: songsList.slice(0, Math.floor(songsList.length / 2)),
    };
  }

  componentDidMount() {
    console.log("La app está lista para Monkear!🤘");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__title">
          <h1>Ponte Monk!</h1>
        </div>
        <Songs songList={this.state.allSongs} />
        <Library songList={this.state.librarySongs} />
      </div>
    );
  }
}

export default App;
