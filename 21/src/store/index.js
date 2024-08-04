import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/reducers";

const rootReducer = combineReducers({ todo: todoReducer });

export const store = configureStore({
  reducer: rootReducer,
});
