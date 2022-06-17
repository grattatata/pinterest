import React from "react";
import { Button } from "@mui/material";

const ButtonEle = (props) => {
  console.log(props);
  return (
    <div>
      <Button
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
