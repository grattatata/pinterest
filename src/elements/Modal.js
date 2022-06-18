import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Modal = ({ text }) => {
  return <>{text === "로그인" ? <Login /> : <Signup />}</>;
};

export default Modal;
