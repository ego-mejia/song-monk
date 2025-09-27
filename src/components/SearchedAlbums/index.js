import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../redux/libraryActions";

// Style
import { AlbumCard, AlbumCardInformation, AlbumCardTitles } from "./style";
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
      image: selectedAlbum.strAlbum3DThumb,
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
                key={index}
                onClick={() =>
                  handleCardClick({
                    idAlbum,
                  })
                }
              >
                <img src={strAlbum3DThumb} alt="Album image" />

                <AlbumCardInformation>
                  <h1>{strAlbum}</h1>
                  <AlbumCardTitles>
                    <h2>{strArtist}</h2>
                    <h2>{intYearReleased}</h2>
                  </AlbumCardTitles>
                  <p>ID: {idAlbum}</p>
                </AlbumCardInformation>

                <ActionButton
                  onClick={() => {
                    handleAddAlbum({
                      intYearReleased,
                      strAlbum,
                      idAlbum,
                      strArtist,
                      strAlbum3DThumb,
                    });
                  }}
                >
                  Add to Library
                </ActionButton>
              </AlbumCard>
            )
        )}
      </section>
    </>
  );
};

export default SearchedAlbums;
