import React from "react";

const initialState = {
  albums: [],
};
/* 
    *ALBUM PROPERTIES
    const album = {
      id: selectedAlbum.idAlbum,
      name: selectedAlbum.strAlbum,
      year: selectedAlbum.intYearReleased,
      artist: selectedAlbum.strArtist,
    };
*/
const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALBUM": //Agrega una canción al estado de la biblioteca
      // Si ya existe, no se agrega a favoritos
      const albumExists = state.albums.some(
        //* iterar en un array de objetos
        (album) => album.id === action.payload.id
      );

      if (albumExists) {
        return state;
      }

      return { ...state, albums: [...state.albums, action.payload] };

    case "REMOVE_ALBUM": //Elimina una canción del estado de la biblioteca según su ID
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.payload),
      };
    default:
      return state;
  }
};

export default libraryReducer;
