import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";
import { movies } from "../../db/db";

// defining the type for slice state
interface MoviesState {
  movies: Movie[];
}

// defining initial state
const initialState: MoviesState = {
  movies: movies,
};

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovie: (state,action:PayloadAction<Movie>) => {
            state.movies = [...state.movies,action.payload]
        }
    }

});

export const {addMovie} = moviesSlice.actions;

export default moviesSlice.reducer;