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
    text,
  } = props;

  const { handleClick } = props;
  return (
    <>
      <Button
        onClick={handleClick}
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
        {text}
      </Button>
    </>
  );
};

export default ButtonEle;
