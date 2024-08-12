import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  getTodos,
  toggleCompletion,
  removeTodo,
} from "./todos.thunks";

const initialState = {
  allTodos: [],
  completeTodos: [],
  incompleteTodos: [],
  loading: false,
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
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
        isComplete: items.isComplete,
      });
      state.completeTodos = state.allTodos.filter((item) => item.isComplete);
      state.incompleteTodos = state.allTodos.filter((item) => !item.isComplete);
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
        deadline: item.deadline,
      }));
      state.allTodos = newAllTodos;
      state.completeTodos = newAllTodos.filter((item) => item.isComplete);
      state.incompleteTodos = newAllTodos.filter((item) => !item.isComplete);
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(toggleCompletion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(toggleCompletion.fulfilled, (state, action) => {
      state.loading = false;

      const item = state.allTodos.find(
        (item) => item.id === action.payload.items[0]._uuid
      );
      item.isComplete = action.payload.items[0].isComplete;
      state.completeTodos = state.allTodos.filter((item) => item.isComplete);
      state.incompleteTodos = state.allTodos.filter((item) => !item.isComplete);
    });
    builder.addCase(toggleCompletion.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
    });
    builder.addCase(removeTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.allTodos = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
      state.completeTodos = state.allTodos.filter((item) => item.isComplete);
      state.incompleteTodos = state.allTodos.filter((item) => !item.isComplete);
    });

    builder.addCase(removeTodo.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
    });
  },
});

export const todosReducer = todosSlice.reducer;
