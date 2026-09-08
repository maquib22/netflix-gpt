import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addPopularMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovie : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.addPopularMovies = action.payload;
        },
        addTrailer : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})


export const {addNowPlayingMovie,addPopularMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;