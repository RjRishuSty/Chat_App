// AppMode.slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light"
};

const appModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleAppMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleAppMode } = appModeSlice.actions;
export default appModeSlice.reducer;
