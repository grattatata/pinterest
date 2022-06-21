import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadPosts } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";
import { getList } from "../store/postReducer";

import styled from "styled-components";
import "../styles/Post.css";

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
    <Wrapper>
      <Container className="main__container">
        {postList.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
    // <div>
    //   {postList.map((post) => {
    //     console.log(post.title, post.content);
    //   })}
    //   <button onClick={toUpload}>업로드 버튼</button>
    // </div>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white;
`;

export default Post;
