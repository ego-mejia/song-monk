import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        console.log(`fetching artist: ${idArtist}`);

        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${idArtist}`
        );

        setFetchedAlbums(response.data.album);
        console.log(response.data.album);
      } catch (e) {
        setError("Error: fetching data.");
        console.log(e.message);
      }
      setLoading(false);
    };
    setTimeout(() => {
      fetchAlbums();
    }, 2000);
  }, []);

  return { fetchedData, loading, error };
};

export default useFetch;
