import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getCookie } from "../shared/cookie";
import axios from "axios";

const serverUrl = "http://dlckdals04.shop";

// get comments list
export const getComments = createAsyncThunk("LOAD_COMMENTS", async (postId) => {
  const response = await axios
    .get(`${serverUrl}/api/post/postdetail/${postId}/comment`, {
      headers: {
        Authorization: `Bearer ${getCookie("myToken")}`,
      },
    })
    .then((response) => response.data);
});

// // upload comment
// export const uploadComment = createAsyncThunk("UPLOAD_COMMENT", async () => {
//   const response = await axios.post(
//     `${serverUrl}/api/post/postdetail/${postId}/comment`,
//     {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     }
//   );
// }).then((response) => response.data);

// // update comment
// export const updateComment = createAsyncThunk("UPDATE_COMMENT", async () => {
//   const response = await axios.post(
//     `${serverUrl}/api/post/postdetail/${postId}/${commentId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     }
//   );
// }).then((response) => response.data);

// // delete comment
// export const deleteComment = createAsyncThunk("DELETE_COMMENT", async () => {
//   const response = await axios.post(
//     `${serverUrl}/api/post/postdetail/${postId}/${commentId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     }
//   );
// }).then((response) => response.data);

export const commentReducer = createSlice({
  name: "commentList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getComments.fulfilled]: (state, { payload }) => [...payload],
  },
});

export default commentReducer.reducer;
