import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadPosts } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";
import { getList } from "../store/postReducer";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postReducer);
  const toUpload = () => {
    navigate("/upload");
  };

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div>
      <button onClick={toUpload}>업로드 버튼</button>
      {postList.map((post, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "100px",
              backgroundColor: "yellow",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/post/postdetail/${post.postId}`);
            }}
          >
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
