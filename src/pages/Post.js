import React from "react";
// import { loadPosts } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  const toUpload = () => {
    navigate("/upload");
  };

  return (
    <div>
      <button onClick={toUpload}>업로드 이동</button>
    </div>
  );
};

export default Post;
