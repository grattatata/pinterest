import React from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import ButtonEle from "../elements/ButtonEle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <div className="modal wrap">
      <div className="modal-overlay">
        <div className="modal-content">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
