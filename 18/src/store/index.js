import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos.slice";
import { themeReducer } from "./theme.slice";

export const store = configureStore({
  reducer: combineReducers({ todos: todosReducer, theme: themeReducer }),
});
