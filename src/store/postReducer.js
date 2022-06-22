import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getCookie } from "../shared/cookie";
import axios from "axios";

const serverUrl = "http://dlckdals04.shop";

export const getList = createAsyncThunk("LOAD_POST", async () => {
  // access token 이름 받아오기
  const response = await axios.get(`${serverUrl}/api/post`, {
    headers: {
      Authorization: `Bearer ${getCookie("myToken")}`,
    },
  });
  return response.data;
});

export const addList = createAsyncThunk("ADD_POST", async (new_list) => {
  const response = await axios.post(`${serverUrl}/api/post/upload`, new_list, {
    headers: {
      Authorization: `Bearer ${getCookie("myToken")}`,
    },
  });
  return response.data;
});

export const getPostDetail = createAsyncThunk(
  "LOAD_POSTDETAIL",
  async (postId) => {
    const response = await axios
      .get(`${serverUrl}/api/post/postdetail/${postId}`, {
        headers: {
          Authorization: `Bearer ${getCookie("myToken")}`,
        },
      })
      .catch((error) => console.log(error));

    console.log(response.data);
    return response.data;
  }
);

export const deletePost = createAsyncThunk("DELETE_POST", async (postId) => {
  const response = await axios
    .delete(`${serverUrl}/api/post/postdetail/remove/${postId}`, {
      headers: {
        Authorization: `Bearer ${getCookie("myToken")}`,
      },
    })
    .catch((error) => console.log(error));
  console.log(response);
  return;
});

export const postReducer = createSlice({
  name: "postList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
    [addList.fulfilled]: (state, { payload }) => [...state, payload],
    [getPostDetail.fulfilled]: (state, { payload }) => [payload],
    [deletePost.fulfilled]: (state, { payload }) => [payload],
  },
});

export default postReducer.reducer;
