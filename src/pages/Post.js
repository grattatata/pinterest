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
      {postList.map((a) => (
        <>
          <div>{a.title}</div>
          <div>{a.content}</div>
          <div>{a.imageUrl}</div>
        </>
      ))}
      <button onClick={toUpload}>업로드 이동</button>
    </div>
  );
};

export default Post;
