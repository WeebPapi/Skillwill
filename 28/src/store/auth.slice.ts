import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const addToken = authSlice.actions.addToken
export const authReducers = authSlice.reducer
