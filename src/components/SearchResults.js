import React from "react";
import Song from "./Song";

const Songs = ({ songList }) => {
  return (
    <section id="searchResults" className="songs">
      {songList.map(({ title, artist, album }, index) => (
        <Song title={title} artist={artist} album={album} key={index} />
      ))}
    </section>
  );
};

export default Songs;
