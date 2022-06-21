import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadPosts } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";
import { getList } from "../store/postReducer";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postReducer);
  console.log(postList);
  const toUpload = () => {
    navigate("/upload");
  };

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div>
      {postList.map((post) => {
        console.log(post.title, post.content);
      })}
      <button onClick={toUpload}>업로드 버튼</button>
    </div>
  );
};

export default Post;
