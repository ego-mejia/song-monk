import React, { useState } from "react";
import axios from "axios";

const useFetchAlbumDetails = () => {
  // loadingAlbumDetails
  // errorAlbumDetails
  // 2115888; the weekend
  const [albumDetails, setAlbumDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAlbumsDetails(albumID) {
    try {
      const response = await axios.get(
        `https://theaudiodb.com/api/v1/json/2/album.php?m=${albumID}`
      );
      setAlbumDetails(response.data.albums);
      console.log(response.data.albums);
    } catch (e) {
      setError("Error fetching data.");
      console.log(e.message);
    }
    setLoading(false);
  }
  fetchAlbumsDetails(2115888);

  return { albumDetails, loading, error };
};

export default useFetchAlbumDetails;
