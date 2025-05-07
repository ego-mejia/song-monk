export const artistList = [
  { name: "Adele", id: "111493" },
  { name: "Coldplay", id: "111239" },
  { name: "Queen", id: "111238" },
  { name: "Daft Punk", id: "111492" },
  { name: "Linkin Park", id: "111358" },
  { name: "ACDC", id: "119231" },
  { name: "Pink Floyd", id: "111259" },
  { name: "Michael Jackson", id: "112424" },
  { name: "David Bowie", id: "111444" },
  { name: "Muse", id: "111564" },
  { name: "U2", id: "112045" },
  { name: "2Pac", id: "111318" },
  { name: "Gorillaz", id: "111393" },
  { name: "Bruno Mars", id: "111674" },
  { name: "Radiohead", id: "111418" },
  { name: "Beyoncé", id: "114364" },
  { name: "Elvis Presley", id: "111248" },
  { name: "Lady Gaga", id: "111236" },
  { name: "Britney Spears", id: "111282" },
  { name: "Aerosmith", id: "111268" },
  { name: "Eminem", id: "111304" },
  { name: "Foo Fighters", id: "111233" },
  { name: "Metallica", id: "111279" },
  { name: "The Weeknd", id: "112024" },
];

/*
* ENDPOINTS
Artist Data: https://www.theaudiodb.com/api/v1/json/2/artist.php?i={idArtist}
All Albums for artist: https://www.theaudiodb.com/api/v1/json/2/album.php?i={idArtist}

Individual Album information: https://www.theaudiodb.com/api/v1/json/2/album.php?m={idAlbum}
"idAlbum":"2109569"

All tracks for Album: www.theaudiodb.com/api/v1/json/2/track.php?m=2115888
"idAlbum":"2115888"
"idArtist":"112024"
"idLabel":"47129"
"strAlbum":"Echoes of Silence"

Adele 111493
Coldplay 111239
https://www.theaudiodb.com/artist/111238-Queen
https://www.theaudiodb.com/artist/111492-Daft-Punk
https://www.theaudiodb.com/artist/111358-Linkin-Park
https://www.theaudiodb.com/artist/119231-ACDC
https://www.theaudiodb.com/artist/111259-Pink-Floyd
https://www.theaudiodb.com/artist/112424-Michael-Jackson
https://www.theaudiodb.com/artist/111444-David-Bowie
https://www.theaudiodb.com/artist/111564-Muse
https://www.theaudiodb.com/artist/112045-U2
https://www.theaudiodb.com/artist/111318-2Pac
https://www.theaudiodb.com/artist/111393-Gorillaz
https://www.theaudiodb.com/artist/111674-Bruno-Mars
https://www.theaudiodb.com/artist/111418-Radiohead
https://www.theaudiodb.com/artist/114364-Beyonc%C3%A9
https://www.theaudiodb.com/artist/111248-Elvis-Presley
https://www.theaudiodb.com/artist/111236-Lady-Gaga
https://www.theaudiodb.com/artist/111282-Britney-Spears
https://www.theaudiodb.com/artist/111268-Aerosmith
https://www.theaudiodb.com/artist/111304-Eminem
https://www.theaudiodb.com/artist/111233-Foo-Fighters
https://www.theaudiodb.com/artist/111279-Metallica

endpoint
https://www.theaudiodb.com/api/v1/json/2/album.php?i=111493
*/
