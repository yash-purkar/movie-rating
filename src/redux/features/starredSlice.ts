import {createSlice} from '@reduxjs/toolkit';
import { Movie } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';
interface StarredState {
    starredMovies: Movie[]
}

const initialState:StarredState = {
    starredMovies:[]
}

export const starredSlice = createSlice({
    name:'starred',
    initialState,
    reducers:{
        addToStar: (state,action:PayloadAction<Movie>) => {
            state.starredMovies = [...state.starredMovies,action.payload]
        },
        removeFromStarred: (state,action:PayloadAction<number>) => {
            state.starredMovies = state.starredMovies.filter((movie) => movie.id !== action.payload);
        }
    }
});

export const {addToStar,removeFromStarred} = starredSlice.actions;

export default starredSlice.reducer;