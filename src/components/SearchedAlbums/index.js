import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../redux/libraryActions";
/*
image: strAlbum3DThumb
year: intYearReleased
name: strAlbum
idAlbum: idAlbum
strArtist: strArtist
*/

const SearchedAlbums = ({ albumsList, selectedAlbum, setSelectedAlbum }) => {
  const dispatch = useDispatch();

  const handleAddAlbum = (selectedAlbum) => {
    const album = {
      id: selectedAlbum.idAlbum,
      name: selectedAlbum.strAlbum,
      year: selectedAlbum.intYearReleased,
      artist: selectedAlbum.strArtist,
    };
    dispatch(addAlbum(album));
  };

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
                <button
                  onClick={() => {
                    handleAddAlbum({
                      intYearReleased,
                      strAlbum,
                      idAlbum,
                      strArtist,
                    });
                  }}
                >
                  Agregar a mi biblioteca
                </button>
              </div>
            )
        )}
      </section>
    </>
  );
};

export default SearchedAlbums;
