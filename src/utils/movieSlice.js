import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovie : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})


export const {addNowPlayingMovie, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;