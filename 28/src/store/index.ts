import { configureStore } from "@reduxjs/toolkit"
import { authReducers } from "./auth.slice"
import { useDispatch } from "react-redux"

export const store = configureStore({
  reducer: authReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
