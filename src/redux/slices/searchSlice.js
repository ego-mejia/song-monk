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
            state.error = '';
            state.loading = false;
        },

    },
    extraReducers: (builder) => {
        builder
        // pending: Cambia loading a true y limpia error.
        .addCase(fetchSongs.pending, (state) => {
            state.loading= true;
            state.error = '';
        })
        
        // fulfilled: Almacena los datos obtenidos en results y cambia loading a false.
        .addCase(fetchSongs.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload;
        })


        // rejected: Almacena el mensaje de error en error.
        .addCase(fetchSongs.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload || 'Unknowned error';
        });
    },
});

// Exports
export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;