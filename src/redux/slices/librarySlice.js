import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    library: [],
    status: 'idle', //'idle', 'loading', 'succeded', 'failed'

}

const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addAlbum: (state, action) => {
            state.library.push(action.payload); //recieves an album object as payload
        },
        removeAlbum: (state, action) => {
            state.library = state.library.filter(album => album.id !== action.payload); //recieves ID album as payload
        }
    }
})

export const { addAlbum, removeAlbum } = librarySlice.actions;

export default librarySlice.reducer;