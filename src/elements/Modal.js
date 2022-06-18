import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Modal = ({ text, closeModal }) => {
  return (
    <>
      {text === "로그인" ? (
        <Login closeModal={closeModal} />
      ) : (
        <Signup closeModal={closeModal} />
      )}
    </>
  );
};

export default Modal;
