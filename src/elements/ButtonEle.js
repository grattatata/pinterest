import React, { useState } from "react";
import { Button } from "@mui/material";

const ButtonEle = (props) => {
  if (modalIsOpen === false) {
    setModalIsOpen(true);
  }
  return (
    <div>
      <Button
        onClick={(e) => {
          const buttonText = e.target.innerText;
          setTest(true);
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
