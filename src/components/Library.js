import React from "react";
import Song from "./Song";

const Library = ({ songList }) => {
  return (
    <section className="Library">
      {songList.map(({ title, artist, album }, index) => {
        <Song title={title} artist={artist} album={album} key={index} />;
      })}
    </section>
  );
};

export default Library;
