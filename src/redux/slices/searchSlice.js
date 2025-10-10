import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
// results: Array para almacenar las canciones obtenidas de la API.
// loading: Booleano para indicar si la app está cargando.
// error: Mensaje de error, si ocurre.
    results: [], //Obtainer Albums from API.
    loading: false, //Indicates if app is loading
    error: '', //error message

}

// Asunc Thunk: albums search
export const fetchAlbums = createAsyncThunk(
  'search/fetchSongs',
  async (idArtist, { rejectWithValue }) => {
    try{
        // Fetch from TheAudioDB API
        const response = await axios.get(
            `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${idArtist}`
        );

    if(!response.data.album) {
            return [];
        }
    
    return response.data.album;
    } catch (error) {
        return rejectWithValue(error.message || 'Error al obtener los álbumes');
    }

  }  
);


// Main Slice
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Define un reducer para reiniciar los resultados (resetResults).
        resetResults: (state) => {
            state.results = [];
        }

    }
});

// Thunk asíncrono:

// Usa createAsyncThunk para definir un thunk llamado fetchSongs.

// En este thunk:

// Realiza una petición al endpoint de búsqueda de álbumes.

// Maneja los estados de carga, éxito y error.

// ExtraReducers:

// Configura extraReducers para manejar los estados del thunk:

// pending: Cambia loading a true y limpia error.

// fulfilled: Almacena los datos obtenidos en results y cambia loading a false.

// rejected: Almacena el mensaje de error en error.