import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../shared/cookie";

export const getList = createAsyncThunk("LOAD_POST", async () => {
  // access token 이름 받아오기
  const response = await axios.get("http://dlckdals04.shop/api/post", {
    headers: {
      Authorization: `Bearer ${getCookie("jwt-token")}`,
    },
  });
  return response.data;
});

export const addList = createAsyncThunk("ADD_POST", async (new_list) => {
  const response = await axios.post(
    "http://dlckdals04.shop/api/post",
    new_list
  );
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
