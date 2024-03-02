import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchSliceState {
    searchQuery: string;
}

const initialState:SearchSliceState = {
  searchQuery: "",
};

export const searchSlice = createSlice({
  name: "SearchQuery",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery =  action.payload;
    },
  },
});

export const {setSearchQuery} = searchSlice.actions;

export default searchSlice.reducer;