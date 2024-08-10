import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodos } from "./todos.thunks";

const initialState = {
  allTodos: [],
  completeTodos: [],
  incompleteTodos: [],
  loading: false,
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    sortTodos: (state) => {
      state.completeTodos = state.allTodos.filter((item) => item.isComplete);
      state.incompleteTodos = state.allTodos.filter((item) => !item.isComplete);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
      const items = action.payload.items[0];
      state.allTodos.push({
        taskName: items.taskName,
        firstName: items.firstName,
        lastName: items.lastName,
        id: items._uuid,
      });
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      const newAllTodos = action.payload.items.map((item) => ({
        taskName: item.taskName,
        firstName: item.firstName,
        lastName: item.lastName,
        isComplete: item.isComplete,
        id: item._uuid,
      }));
      state.allTodos = newAllTodos;
      state.completeTodos = newAllTodos.filter((item) => item.isComplete);
      state.incompleteTodos = newAllTodos.filter((item) => !item.isComplete);
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
  },
});

export const sortTodos = todosSlice.actions.sortTodos;
export const todosReducer = todosSlice.reducer;
