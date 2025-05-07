// import React from "react";
// import Song from "../Song";
// import Album from "../Album";

// // Componente que renderiza todas las canciones
// const SearchResults = ({ albumList, onAddToLibrary, formData }) => {
//   // TODO: filtrar lista de Albumes por artista
//   // const filteredAlbums = albumList.filter(({ title }) => {
//   //   if (formData != "") {
//   //     return title.toLowerCase().includes(formData.search.toLowerCase());
//   //   } else {
//   //     return title;
//   //   }
//   // });

//   return (
//     <>
//       {/* <div className="App__title">
//         <h1>Ponte Monk!</h1>
//       </div> */}
//       <section id="searchResults" className="songs">
//         {albumList.map(({ strArtist, strAlbum,intYearReleased,strAlbum3DThumb, strGenre}, index) => (
//           // --->if formData is in title: renderizar Song, if not, no renderizar.
//           // <Song
//           //   title={title}
//           //   artist={artist}
//           //   album={album}
//           //   showButton={true}
//           //   onAddToLibrary={onAddToLibrary}
//           //   key={index}
//           // />
//         ))}
//       </section>
//     </>
//   );
// };

// export default SearchResults;
