import React from "react";
import Song from "./Song";

const Library = ({ songList }) => {
  return (
    <section id="Library" className="songs">
      {songList.map(({ title, artist, album }, index) => (
        <Song title={title} artist={artist} album={album} key={index} />
      ))}
    </section>
  );
};

export default Library;
