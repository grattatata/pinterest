import React from "react";

const ButtonEle = () => {
  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        style={{
          marginRight: marginRight,
          marginLeft: marginLeft,
          backgroundColor: backgroundColor,
          borderRadius: "20px",
          color: color,
          width: widthPer ? widthPer : "90px",
          margin: `${margin} 0px`,
          fontSize: fontSize,
          height: height,
          position: position,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          overflow: overflow,
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonEle;
