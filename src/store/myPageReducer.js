import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getCookie } from "../shared/cookie";
import axios from "axios";

export const getMyPosts = createAsyncThunk("GET_MYPOST", async () => {
  const response = await axios
    .get("http://dlckdals04.shop/api/mypage/", {
      headers: {
        Authorization: `Bearer ${getCookie("myToken")}`,
      },
    })
    .catch((error) => console.log(error));
  console.log(response.data);
  return response.data;
});

export const myPostReducer = createSlice({
  name: "myPost",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getMyPosts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return [...payload];
    },
  },
});

export default myPostReducer.reducer;
