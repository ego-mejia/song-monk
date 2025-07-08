import React, { useState } from "react";
import FetchedSongs from "./FetchedSongs";
/*
image: strAlbum3DThumb
year: intYearReleased
name: strAlbum
idAlbum: idAlbum
strArtist: strArtist
*/

const SearchedAlbums = ({ albumsList }) => {
  // Logic to save the selected Album
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleCardClick = (album) => {
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <>
      <section id="searchAlbums" className="albums">
        {albumsList.map(
          (
            { strAlbum3DThumb, intYearReleased, strAlbum, idAlbum, strArtist },
            index
          ) =>
            strAlbum3DThumb && (
              <div
                className="albums__card"
                key={index}
                onClick={() =>
                  handleCardClick({
                    idAlbum,
                  })
                }
              >
                <img src={strAlbum3DThumb} alt="Album image" width={"200px"} />
                <p>{intYearReleased}</p>
                <p>{strAlbum}</p>
                <p>{idAlbum}</p>
                <p>{strArtist}</p>
              </div>
            )
        )}
      </section>
      {selectedAlbum ? (
        <FetchedSongs closeModal={closeModal} selectedAlbum={selectedAlbum} />
      ) : (
        <p>NADA</p>
      )}
    </>
  );
};

export default SearchedAlbums;
