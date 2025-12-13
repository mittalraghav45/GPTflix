import { createSlice } from "@reduxjs/toolkit"; 

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
    }, 
   reducers: {
        toggleGptSearchView: (state) => {
           state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGpt: (state) => {
            state.movieNames = null;
            state.movieResults = null;
            state.gptMovies = null;
        },
         
    }
})

export default gptSlice.reducer;
export  const {toggleGptSearchView,addGptMovieResult,clearGpt}=gptSlice.actions;