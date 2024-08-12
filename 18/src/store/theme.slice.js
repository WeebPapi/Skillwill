import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const theme = action.payload.storedTheme;
      if (theme === "light") {
        state.theme = "dark";
      } else if (theme === "dark") {
        state.theme = "light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
