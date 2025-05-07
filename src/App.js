import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.css";
// Components
import Header from "./components/Header";
import Home from "./Pages/Home";
import SongDetails from "./Pages/SongDetails";
// Hooks
import useFetchAlbumsByArtist from "./hooks/useFetchAlbumsByArtist";
// Data

const App = () => {
  // * Manejar los datos en el componente padre

  const [formData, setFormData] = useState({
    search: "119231", //Esto es ACDC
  });
  const { fetchedAlbums, loading, error } = useFetchAlbumsByArtist(
    formData.search
  );
  const [librarySongs, setLibrarySongs] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fetchedAlbum={fetchedAlbums}
              loading={loading}
              error={error}
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
