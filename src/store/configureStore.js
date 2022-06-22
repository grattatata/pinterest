import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postReducer";

const store = configureStore({
  reducer: {
    postReducer: postReducer,
    // commentReducer: commentReducer,
  },
});

export default store;
