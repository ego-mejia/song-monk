// Documento que llevará la información de como utlizar la API.

// También el porqué se hizo así, debido a como funcionan los endpoints del API.
/*
? ENDPOINTS
*Website
https://www.theaudiodb.com/free_music_api


*Artist Data:
 https://www.theaudiodb.com/api/v1/json/2/artist.php?i={idArtist}

 export const artistList = [
  { name: "Adele", id: "111493" },
  { name: "Coldplay", id: "111239" },
  { name: "Queen", id: "111238" },

* All Albums for artist:
 https://www.theaudiodb.com/api/v1/json/2/album.php?i={idArtist}

*Individual Album information:
https://www.theaudiodb.com/api/v1/json/2/album.php?m={idAlbum}
"idAlbum":"2109569"

*All tracks for Album: 
https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888
"idAlbum":"2115888"
"idArtist":"112024"
"idLabel":"47129"
"strAlbum":"Echoes of Silence"

*/

import React from "react";

const Documentation = () => {
  return (
    <div>
      <h1>Documentación de la API</h1>
    </div>
  );
};

export default Documentation;
