import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("LOAD_POST", async () => {
  const response = await axios.get("http://localhost:3001/list");
  return response.data;
});

export const addList = createAsyncThunk("ADD_POST", async (new_list) => {
  const response = await axios.post("http://localhost:3001/list", new_list);
  return response.data;
});

export const postReducer = createSlice({
  name: "postList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
    [addList.fulfilled]: (state, { payload }) => [...state, payload],
  },
});
