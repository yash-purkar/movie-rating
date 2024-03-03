import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import filtersReducer from "./features/filtersSlice";
import starredReducer from './features/starredSlice';
import watchlistReducer from './features/watchlistSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
    starred: starredReducer,
    watchlist:watchlistReducer
  },
});

// type for useSelector hook
export type RootState = ReturnType<typeof store.getState>;

// type for dispatch hook
export type AppDispatch = typeof store.dispatch;
