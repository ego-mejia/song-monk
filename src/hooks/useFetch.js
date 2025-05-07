import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

//TODO: Realiza una petición al endpoint de búsqueda de álbumes
//TODO: Utiliza el custom hook useFetch para realizar una petición al endpoint de búsqueda de álbumes de un artista en la API The Audio DB.
//TODO: Este hook debe recibir la URL del endpoint como parámetro y manejar los estados de carga, éxito y error.

// interface Song {
//     idAlbum: number;
//     strArtist: string;
//     strStyle: string;
//   }

const useFetch = (apiURl) => {
  // const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [allSongs, setAllSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAlbumsByArtist = async () => {
      try {
        console.log(`fetching data...`);

        // const response = await axios.get(
        //   "https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=oasis"
        // );
        // setAllSongs(response.data);
        // console.log(response.data);
        setAllSongs(apiURl);
        console.log(apiURl);
      } catch (e) {
        setError("Error: fetching data.");
        console.log(e.message);
      }
      setLoading(false);
    };
    fetchAlbumsByArtist();
  }, []);

  return { allSongs, loading, error };
};
export default useFetch;

//TODO: La respuesta del endpoint devolverá información sobre los álbumes del artista buscado. Extrae la información relevante, como el título de los álbumes y sus canciones asociadas.
//TODO: Asegúrate de transformar los datos en un formato que sea fácil de manejar en tu app. Por ejemplo, podrías mapear los álbumes a canciones específicas.
