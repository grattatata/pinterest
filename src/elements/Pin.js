import React from "react";
import styled from "styled-components";
import ButtonEle from "./ButtonEle";

const Pin = (props) => {
  const { imageUrl } = props;
  const { clickEvent } = props;

  return (
    <Wrapper>
      <div className="container" onClick={clickEvent}>
        <img src={imageUrl} alt="pin" />
        <div class="content">
          <ButtonEle
            backgroundColor="#E60B23"
            position="absolute"
            top="10px"
            right="10px"
            text="저장"
          />
          <ButtonEle
            widthPer="60%"
            backgroundColor="white"
            position="absolute"
            color="#3E3D3B"
            left="10px"
            bottom="10px"
            text="링크"
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
