import React, { Component } from "react";
import { songs } from "./songsData";

export class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs,
      // title: "Good Good",
      // artist: "Usher",
      // album: "Coming Home",
    };
  }

  render() {
    return (
      <section className="songs">
        {this.state.songs.map((song, index) => (
          <div key={index} className="songs__card">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p>{song.album}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Songs;
