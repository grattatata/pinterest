// import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import { getCookie } from "../shared/cookie";
// import axios from "axios";

// const serverUrl = "http://dlckdals04.shop";

// // get comments list
// export const getComments = createAsyncThunk("GET/getComments", async () => {
//   const response = await axios
//     .get(`${serverUrl}/api/post/postdetail/${postId}/comment`, {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     })
//     .then((response) => response.data);
// });

// // add comment

// // edit comment

// // delete comment

// const initialState = {};

// const commentReducer = createSlice({
//   name: second,
//   initialState,
//   reducers: {},
// });

// export default commentReducer.reducer;
