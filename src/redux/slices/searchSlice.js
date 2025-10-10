import { createSlice } from '@reduxjs/toolkit';

const initialState = {
// results: Array para almacenar las canciones obtenidas de la API.
// loading: Booleano para indicar si la app está cargando.
// error: Mensaje de error, si ocurre.
    results: [],
    loading: false,
    error: '',

}


// Reducers:

// Define un reducer para reiniciar los resultados (resetResults).

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