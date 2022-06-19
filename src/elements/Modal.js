import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Modal = ({
  text,
  closeModal,
  setIsLoginModalOpen,
  setIsSignupModalOpen,
}) => {
  return (
    <>
      {text === "로그인" ? (
        <Login
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
        />
      ) : (
        <Signup
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
        />
      )}
    </>
  );
};

export default Modal;
