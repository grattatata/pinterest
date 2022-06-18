import React, { useState } from "react";
import { Button } from "@mui/material";

const ButtonEle = (props) => {
  const {
    marginRight,
    backgroundColor,
    color,
    margin,
    widthPer,
    fontSize,
    height,
  } = props;
  const { handleModal } = props;
  return (
    <>
      <Button
        onClick={handleModal}
        variant="contained"
        style={{
          marginRight: marginRight,
          backgroundColor: backgroundColor,
          borderRadius: "20px",
          color: color,
          width: widthPer ? widthPer : "90px",
          margin: `${margin} 0px`,
          fontSize: fontSize,
          height: height,
        }}
      >
        {props.text}
      </Button>
    </>
  );
};

export default ButtonEle;
