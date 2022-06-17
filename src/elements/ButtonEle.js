import React, { useState } from "react";
import { Button } from "@mui/material";

const ButtonEle = (props) => {
  return (
    <div>
      <Button
        onClick={(e) => {
          const buttonText = e.target.innerText;
        }}
        variant="contained"
        style={{
          marginRight: `${props.marginRight}`,
          backgroundColor: `${props.backgroundColor}`,
          borderRadius: "20px",
          color: `${props.color}`,
          width: "90px",
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonEle;
