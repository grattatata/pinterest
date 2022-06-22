import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { loadPosts } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";
import { getList } from "../store/postReducer";
import Pin from "../elements/Pin";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import styled from "styled-components";
import "../styles/Post.css";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postReducer);
  console.log(postList);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <Wrapper>
      <Container className="main__container">
        {postList.map((pin, i) => {
          return (
            <Pin
              key={i}
              imageUrl={postList[i].imageUrl}
              onClick={() => {
                navigate(`/post/postdetail/${postId}`);
              }}
            />
          );
        })}
      </Container>
      <AddCircleIcon
        onClick={() => {
          navigate("/upload");
        }}
        style={{
          position: "fixed",
          height: "60px",
          width: "60px",
          zIndex: "9100",
          right: "20px",
          bottom: "20px",
          cursor: "pointer",
          color: "white",
          backgroundColor: "lightgrey",
          borderRadius: "30px",
        }}
      />
    </Wrapper>
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
