import React, { useState } from "react";
import Input from "../elements/Input";
import ButtonEle from "../elements/ButtonEle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

const LoginModal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-header" style={{ height: "150px" }}>
          <FontAwesomeIcon
            style={{
              fontSize: "30px",
              color: "#E60B23",
            }}
            icon={faPinterest}
          />
          <h1 className="login-title">
            Pinterest에 오신 것을
            <br /> 환영합니다
          </h1>
        </div>
        <form className="login-form">
          <label>이메일</label>
          <Input placeholder="이메일" />
          <label>비밀번호</label>
          <Input placeholder="비밀번호" />
        </form>

        <ButtonEle backgroundColor="#E60B23" text="로그인" />
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
