import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getCookie } from "../shared/cookie";
import axios from "axios";

const serverUrl = "http://dlckdals04.shop";

// upload comment
export const uploadComment = createAsyncThunk(
  "UPLOAD_COMMENT",
  async (param) => {
    console.log(param.postId, param.content);
    const newContent = param.content;
    const newComment = { comment: newContent };
    const response = await axios
      .post(
        `${serverUrl}/api/post/postdetail/${param.postId}/comment`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${getCookie("myToken")}`,
          },
        }
      )
      .then((response) => console.log(response.data));
    return response.data;
  }
);

// // update comment(기능구현 오류 수정 중)
// // commentId 인자 값을 넘기지 못하는 오류
// export const updateComment = createAsyncThunk("UPDATE_COMMENT", async () => {
//   const response = await axios
//     .post(`${serverUrl}/api/post/postdetail/${postId}/${commentId}`, {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     })
//     .then((response) => response.data);
// });

// // delete comment(기능구현 오류 수정 중)
// // updateComment 와 같은 상황
// export const deleteComment = createAsyncThunk("DELETE_COMMENT", async () => {
//   const response = await axios
//     .delete(`${serverUrl}/api/post/postdetail/${postId}/${commentId}`, {
//       headers: {
//         Authorization: `Bearer ${getCookie("myToken")}`,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       window.location.reload();
//     });
//   return response.data;
// });

export const commentReducer = createSlice({
  name: "commentList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [uploadComment.fulfilled]: (state, { payload }) => [...payload],

    // // deleteComment 와 연결됨
    // [deleteComment.fulfilled]: (state, action) => {
    //   if (action.payload) {
    //     const lists = current(state.list).filter((comment, i) => {
    //       return comment.id !== action.payload;
    //     });
    //     console.log("Delete comment");
    //     state.list = lists;
    //   }
    // },
    // [deleteComment.rejected]: (state, action) => {
    //   console.log("Delete reject");
    //   alert("본인이 작성한 댓글이 아닙니다😅");
    // },
  },
});

export default commentReducer.reducer;
