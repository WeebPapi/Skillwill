import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../App";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, ThunkAPI) => {
    try {
      console.log(payload);
      const res = await axiosInstance.post("/tasks", payload);
      if (res) return ThunkAPI.fulfillWithValue(res.data);
    } catch {
      return ThunkAPI.rejectWithValue("Something Went Wrong");
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload, ThunkAPI) => {
    try {
      const res = await axiosInstance.put(`/tasks/${payload.id}`, payload);
      return ThunkAPI.fulfillWithValue(res.data);
    } catch {
      return ThunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, ThunkAPI) => {
    try {
      const res = await axiosInstance.get("/tasks");
      if (res) return ThunkAPI.fulfillWithValue(res.data);
    } catch {
      return ThunkAPI.rejectWithValue("Something Went Wrong");
    }
  }
);

export const toggleCompletion = createAsyncThunk(
  "todos/toggleCompletion",
  async (action, ThunkAPI) => {
    try {
      let url = "/tasks";
      let payload = [
        {
          _uuid: action.id,
          isComplete: !action.isComplete,
        },
      ];
      const res = await axiosInstance.put(url, payload);
      return ThunkAPI.fulfillWithValue(res.data);
    } catch {
      return ThunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (action, ThunkAPI) => {
    try {
      let url = `/tasks/${action}`;
      await axiosInstance.delete(url);
      return ThunkAPI.fulfillWithValue(action);
    } catch {
      return ThunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
