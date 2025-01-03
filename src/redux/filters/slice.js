import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { searchStr: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
