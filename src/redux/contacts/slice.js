import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.items = [];
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
