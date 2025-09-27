import React from "react";
import Song from "../Song";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "../../redux/libraryActions";

// Style
import {
  LibraryAlbum,
  Titles,
  Content,
  ImageContainer,
  RemoveAlbumButton,
} from "./style";

// Componente que renderiza las canciones en la biblioteca del usuario
const Library = () => {
  const albums = useSelector((state) => state.albums); //? A qué objeto se debe acceder despies de state.album.?????
  const dispatch = useDispatch();
  const handleDeleteAlbum = (albumID) => {
    dispatch(removeAlbum(albumID));
  };

  return (
    //   const album = {
    // id: selectedAlbum.idAlbum,
    // name: selectedAlbum.strAlbum,
    // year: selectedAlbum.intYearReleased,
    // artist: selectedAlbum.strArtist,
    <>
      {albums.map((album) => (
        <LibraryAlbum>
          <ImageContainer>
            <img src={album.image} alt="Album image" />
            <RemoveAlbumButton onClick={() => handleDeleteAlbum(album.id)}>
              <h2>X</h2>
            </RemoveAlbumButton>
          </ImageContainer>
          <Content>
            <h2>{album.name}</h2>
            <Titles>
              <h3>{album.artist}</h3>
              <h3>{album.year}</h3>
            </Titles>
          </Content>
        </LibraryAlbum>
      ))}
    </>
  );
};

export default Library;
//? 1.- Usa el hook useSelector de React-Redux para acceder al estado global y obtener las canciones almacenadas en la biblioteca.
//? 2.- Renderiza una lista con las canciones agregadas.
//? 3.- Agrega un botón "Eliminar" junto a cada canción.
//? 4.- Usa useDispatch para despachar la acción removeSong cuando se haga clic en "Eliminar".
