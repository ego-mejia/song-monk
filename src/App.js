import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.css";
// Components
import Header from "./components/Header";
import Home from "./Pages/Home";
import SongDetails from "./Pages/SongDetails";
// Hooks
import useFetchAlbumsByArtist from "./hooks/useFetchAlbumsByArtist";
import useFetchAlbumDetails from "./hooks/useFetchAlbumDetails";
import ArtistInformation from "./Pages/ArtistInformation";
import Documentation from "./Pages/Documentation";

const App = () => {
  // * Manejar los datos en el componente padre

  const [formData, setFormData] = useState(["111381"]);
  // Logic to save the selected Album
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const {
    fetchedAlbums,
    loading: loadingAlbums,
    error: errorAlbums,
    fetchAlbums,
  } = useFetchAlbumsByArtist();

  console.log("App render:", { loadingAlbums, fetchedAlbums, errorAlbums });

  // const {
  // albumDetails,
  // loading: loadingAlbumDetails,
  // error: errorAlbumDetails,
  // } = useFetchAlbumDetails(2115888);

  useEffect(() => {
    fetchAlbums(formData);
  }, [formData]);

  const [librarySongs, setLibrarySongs] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              albumsList={fetchedAlbums}
              loading={loadingAlbums}
              error={errorAlbums}
              librarySongs={librarySongs}
              setLibrarySongs={setLibrarySongs}
              formData={formData}
              setFormData={setFormData}
              fetchAlbums={fetchAlbums}
              // For selecting AlbumID for song list
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          }
        />

        <Route path="/song" element={<SongDetails />} />
        <Route path="/artists" element={<ArtistInformation />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
};

export default App;
