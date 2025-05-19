import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// import { songsList } from "../components/SongsData";

//TODO: Realiza una petición al endpoint de búsqueda de álbumes
//TODO: Utiliza el custom hook useFetch para realizar una petición al endpoint de búsqueda de álbumes de un artista en la API The Audio DB.
//TODO: Este hook debe recibir la URL del endpoint como parámetro y manejar los estados de carga, éxito y error.

// interface Song {
//     idAlbum: number;
//     strArtist: string;
//     strStyle: string;
//   }
// La respuesta del endpoint devolverá información sobre los álbumes del artista buscado. Extrae la información relevante, como el título de los álbumes y sus canciones asociadas.
const useFetchAlbumsByArtist = () => {
  const [fetchedAlbums, setFetchedAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlbums = async (idArtist) => {
    try {
      if (idArtist.length === 0) {
        console.log(`No Artist ID for fetching.`);
      } else {
        console.log(`fetching artist: ${idArtist}`);
        const response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${idArtist}`
        );
        setFetchedAlbums(response.data.album);
        console.log(response.data.album);
      }
    } catch (e) {
      setError("Error: fetching data.");
      console.log(e.message);
    }
    setLoading(false);
  };

  return { fetchedAlbums, loading, error, fetchAlbums };
};
export default useFetchAlbumsByArtist;

//TODO: La respuesta del endpoint devolverá información sobre los álbumes del artista buscado. Extrae la información relevante, como el título de los álbumes y sus canciones asociadas.
//TODO: Asegúrate de transformar los datos en un formato que sea fácil de manejar en tu app. Por ejemplo, podrías mapear los álbumes a canciones específicas.
