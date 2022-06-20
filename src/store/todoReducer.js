// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getList = createAsyncThunk("GET_TODO", async () => {
//   const response = await axios.get("http://localhost:3001/list");
//   return response.data;
// });

// export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
//   const response = await axios.post("http://localhost:3001/list", newList);
//   return response.data; // promise 반환
// });

// export const todoReducer = createSlice({
//   name: "todoList",
//   initialState: [],
//   reducers: {},
//   extraReducers: {
//     [getList.fulfilled]: (state, { payload }) => [...payload],
//     [addList.fulfilled]: (state, { payload }) => [...state, payload],
//   },
// });
