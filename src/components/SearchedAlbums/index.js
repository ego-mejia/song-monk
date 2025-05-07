import React from "react";

/*
image: strAlbum3DThumb
year: intYearReleased
name: strAlbum
idAlbum: idAlbum
strArtist: strArtist
*/

const SearchedAlbums = ({ albumsList }) => {
  return (
    <>
      <section id="searchAlbums" className="albums">
        {albumsList.map(
          (
            { strAlbum3DThumb, intYearReleased, strAlbum, idAlbum, strArtist },
            index
          ) => (
            <div className="albums__card" key={index}>
              <img src={strAlbum3DThumb} alt="Album image" />
              <p>{intYearReleased}</p>
              <p>{strAlbum}</p>
              <p>{idAlbum}</p>
              <p>{strArtist}</p>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default SearchedAlbums;
