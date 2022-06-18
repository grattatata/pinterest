import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const widthPer = Number(props.widthPer);
  return (
    <>
      <InputStyle
        type="text"
        placeholder={props.placeholder}
        style={{ width: `${widthPer}%` }}
      ></InputStyle>
    </>
  );
};

const InputStyle = styled.input`
  border: 2px solid #cdcdcd;
  padding: 8px 16px;
  min-height: 32px;
  max-width: 100%;
  white-space: nowrap;
  font-size: 16px;
  border-radius: 16px;
  font-weight: 200;
  :focus {
    box-shadow: 0 0 0 4px rgb(0 132 255 / 50%);
    outline: 0;
  }
`;
export default Input;
