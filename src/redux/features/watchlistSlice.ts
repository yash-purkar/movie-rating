import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types";
import type {PayloadAction} from '@reduxjs/toolkit'
interface WatchlistState {
    watchlistMovies: Movie[]
}

const initialState:WatchlistState = {
watchlistMovies:[]
}

export const watchlistReducer = createSlice({
    name:'watchlist',
    initialState,
    reducers:{
        addToWatchlist:(state,action:PayloadAction<Movie>) => {
            state.watchlistMovies = [...state.watchlistMovies,action.payload]
        },
        removeFromWatchlist: (state,action:PayloadAction<number>) => {
            state.watchlistMovies = state.watchlistMovies.filter((movie) => movie.id !== action.payload)
        }
    }
});

export const {addToWatchlist,removeFromWatchlist} = watchlistReducer.actions;

export default watchlistReducer.reducer;