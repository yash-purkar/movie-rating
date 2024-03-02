import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import searchQueryReducer from "./features/searchSlice";
import starredReducer from './features/starredSlice';
import watchlistReducer from './features/watchlistSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    searchQuery: searchQueryReducer,
    starred: starredReducer,
    watchlist:watchlistReducer
  },
});

// type for useSelector hook
export type RootState = ReturnType<typeof store.getState>;

// type for dispatch hook
export type AppDispatch = typeof store.dispatch;
