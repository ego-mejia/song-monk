import React from "react";

export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};

export const removeSong = () => {
  return <div>removeSong</div>;
};
