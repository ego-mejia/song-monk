import React, { useState, useEffect } from "react";
import axios from "axios";

const useArtistDetails = (idArtist) => {
  const [fetchedArtist, setFetchedArtist] = useState([]);
  const [loadingArtist, setLoadingArtist] = useState(true);
  const [errorArtist, setErrorArtist] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        // console.log(`fetching artist: ${idArtist}`);

        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/artist.php?i=${idArtist}`
        );

        setFetchedArtist(response.data.artists);
        console.log(response.data.artists);
      } catch (e) {
        setErrorArtist("Error: fetching data.");
        console.log(e.message);
      }
      setLoadingArtist(false);
    };
    fetchArtists();
  }, []);

  return { fetchedArtist, loadingArtist, errorArtist };
};

export default useArtistDetails;
