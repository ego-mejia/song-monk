import React from "react";

const initialState = {
  songs: [],
};
/* 
    *Song Properties
    !! CHECK ALBUM COMPONENT!
*/
const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG": //Agrega una canción al estado de la biblioteca
      return { ...state, songs: [...state.songs, action.payload] };
    case "REMOVE_SONG": //Elimina una canción del estado de la biblioteca según su ID
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
  }
};

export default libraryReducer;
