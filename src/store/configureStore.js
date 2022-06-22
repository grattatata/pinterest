import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const store = configureStore({
  reducer: {
    postReducer: postReducer,
    commentReducer: commentReducer,
  },
});

export default store;
