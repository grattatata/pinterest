import React from "react";
import styled from "styled-components";
import ButtonEle from "./ButtonEle";

const Pin = (props) => {
  let { imageUrl } = props;

  return (
    <Wrapper>
      <Container>
        <img src={imageUrl} alt="pin" />
        <Content>
          <ButtonEle
            backgroundColor="#E60B23"
            position="absolute"
            top="10px"
            right="10px"
            text="저장"
          />
          <ButtonEle
            widthPer="70%"
            backgroundColor="white"
            position="absolute"
            color="#3E3D3B"
            left="10px"
            bottom="30px"
            text="링크"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }

  :hover {
    opacity: 0.8;
    border-radius: 16px;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export default Pin;
