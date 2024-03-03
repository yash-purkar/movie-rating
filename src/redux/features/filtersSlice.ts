import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface FiltersSliceState {
  searchQuery: string;
  genre: string;
  year: string;
  rating: string;
}

interface FilterActionPayload {
  filterName: "searchQuery" | "genre" | "year" | "rating";
  value: string;
}

const initialState: FiltersSliceState = {
  searchQuery: "",
  genre: "",
  year: "",
  rating: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterActionPayload>) => {
      const { filterName, value } = action.payload;
      state[filterName] = value;
      console.log({ state });
    },
    clearFilters: (state) => {
      state.genre = '';
      state.year = '';
      state.rating = '';
      console.log("state",state);
    },
  },
});

export const { setFilter,clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
