import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../redux/libraryActions";

// Style
import { AlbumCard } from "./style"
import { ActionButton } from "../../styles/reusableStyles";


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
              <AlbumCard
                className="album__card"
                key={index}
                onClick={() =>
                  handleCardClick({
                    idAlbum,
                  })
                }
              >
                <img src={strAlbum3DThumb} alt="Album image" />
                <p>{intYearReleased}</p>
                <p>{strAlbum}</p>
                <p>{idAlbum}</p>
                <p>{strArtist}</p>
                
                <ActionButton
                  onClick={() => {
                      handleAddAlbum({
                        intYearReleased,
                        strAlbum,
                        idAlbum,
                        strArtist,
                      });
                    }}
                >Agregar a mi biblioteca 2</ActionButton>
                
              </AlbumCard>
            )
        )}
      </section>
    </>
  );
};

export default SearchedAlbums;
