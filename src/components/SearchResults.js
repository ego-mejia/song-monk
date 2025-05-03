import React from "react";
import Song from "./Song";

const Songs = ({ songsList }) => {
  return (
    <section id="searchResults" className="songs">
      {songsList.map(({ title, artist, album }, index) => (
        <Song title={title} artist={artist} album={album} key={index} />
      ))}
    </section>
  );
};

export default Songs;
