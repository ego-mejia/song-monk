import React from "react";
import Song from "./Song";

const SearchResults = ({ songList, onAddToLibrary }) => {
  return (
    <section id="searchResults" className="songs">
      {songList.map(({ title, artist, album }, index) => (
        <Song
          title={title}
          artist={artist}
          album={album}
          showButton={true}
          onAddToLibrary={onAddToLibrary}
          key={index}
        />
      ))}
    </section>
  );
};

export default SearchResults;
