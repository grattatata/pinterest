import { Avatar, Button } from "@mui/material";
import styled from "styled-components";
import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ButtonEle from "../elements/ButtonEle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/mypage.css";

const Mypage = () => {
  return (
    <MypageStyle>
      <div className="profile-header">
        <AccountCircleIcon style={{ fontSize: "120px" }} />
        <div className="profile-nickname">Venny</div>
        <span className="profile-email">@hyungsup42134</span>
        <div className="action-buttons">
          <ButtonEle text="공유" backgroundColor="#e1e1e1" color="black" />
          <ButtonEle
            text="프로필 수정"
            backgroundColor="#e1e1e1"
            widthPer="110px"
            color="black"
          />
        </div>
      </div>
      <div className="action-bar">
        <Button className="btn">생성됨</Button>
        <Button className="btn">저장됨</Button>
      </div>
      <div className="post-board">
        <div className="grid-container">
          {itemData.map((item, idx) => (
            <div key={idx} className="grid-item">
              <img src={item.img} alt={item.title} />
              <div className="hover-bg">
                <ButtonEle
                  text="저장"
                  backgroundColor="#E60B23"
                  position="absolute"
                  widthPer="20%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MypageStyle>
  );
};

const MypageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export default Mypage;
