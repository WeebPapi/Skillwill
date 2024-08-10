import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../App";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, ThunkAPI) => {
    try {
      const res = await axiosInstance.post("/tasks", payload);
      if (res) return ThunkAPI.fulfillWithValue(res.data);
    } catch {
      return ThunkAPI.rejectWithValue("Something Went Wrong");
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
