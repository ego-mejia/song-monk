import React from "react";
import Song from "./Song";

const Songs = ({ songsList }) => {
  const songs = songsList;
  return (
    <section id="searchResults" className="songs">
      {songs.map((song, index) => (
        <Song
          title={song.title}
          artist={song.artist}
          album={song.album}
          key={index}
        />
      ))}
    </section>
  );
};

export default Songs;
