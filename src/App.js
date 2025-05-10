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

const App = () => {
  // * Manejar los datos en el componente padre

  const [formData, setFormData] = useState({
    search: "119231", //Esto es ACDC
  });

  const { fetchedAlbums, loadingAlbums, errorAlbums } = useFetchAlbumsByArtist(
    formData.search
  );

  const { albumDetails, loading, error } = useFetchAlbumDetails(2115888);

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
            />
          }
        />

        <Route path="/song" element={<SongDetails />} />
      </Routes>
    </div>
  );
};

export default App;
