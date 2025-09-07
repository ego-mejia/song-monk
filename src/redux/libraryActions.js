import React from "react";

export const addAlbum = (album) => {
  return {
    type: "ADD_ALBUM",
    payload: album,
  };
};

export const removeAlbum = (albumId) => {
  return {
    type: "REMOVE_ALBUM",
    payload: albumId,
  };
};
