import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchAlbumDetails = (idAlbum) => {
  // loadingAlbumDetails
  // errorAlbumDetails
  // 2115888; the weekend
  const [albumDetails, setAlbumDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumsDetails = async () => {
      try {
        console.log(`fetching album: ${idAlbum}`);
        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${idAlbum}`
        );
        setAlbumDetails(response.data.album);
        console.log(response.data.album);
      } catch (e) {
        setError("Error fetching data.");
        console.log(e.message);
      }
      setLoading(false);
    };
    fetchAlbumsDetails();
  }, []);
  return { albumDetails, loading, error };
};

export default useFetchAlbumDetails;
