import React from "react";
import styled from "styled-components";
import ButtonEle from "./ButtonEle";
import { useNavigate } from "react-router-dom";

const Pin = (props) => {
  const { imageUrl } = props;
  const { clickEvent } = props;
  const navigate = useNavigate();

  const onSave = (e) => {
    if (e.target.innerHTML === "저장") {
      console.log("북마크 완료");
    } else {
      e.preventDefault();
      return;
    }
  };

  const toImageLink = () => {
    window.open(`${imageUrl}`);
  };

  return (
    <Wrapper>
      <div className="container" onClick={clickEvent}>
        <img src={imageUrl} alt="pin" />
        <div className="content">
          <ButtonEle
            backgroundColor="#E60B23"
            position="absolute"
            top="10px"
            right="10px"
            text="저장"
            handleClick={onSave}
          />
          <ButtonEle
            widthPer="60%"
            backgroundColor="white"
            position="absolute"
            color="#3E3D3B"
            left="10px"
            bottom="10px"
            text={imageUrl}
            className="linkBtn"
            height="24px"
            overflow="hidden"
            fontSize="10px"
            padding="6px"
            handleClick={toImageLink}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

export default Pin;
