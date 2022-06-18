import React, { useState } from "react";
import Input from "../elements/Input";
import ButtonEle from "../elements/ButtonEle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "../styles/LoginNSignup.css";

const Login = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="signup-default-modal">
        <div className="modalContainer">
          <FontAwesomeIcon
            style={{
              fontSize: "30px",
              color: "#E60B23",
            }}
            icon={faPinterest}
          />
          <h1 className="login-title">Hangterest에 오신 것을 환영합니다</h1>
          <div className="FormWrap">
            <form className="registerForm">
              <div>
                <label className="label">이메일</label>
                <Input placeholder="이메일" widthPer="100%" />
              </div>
              <div>
                <label>닉네임</label>
                <Input placeholder="닉네임" widthPer="100%" />
              </div>
              <div>
                <label>비밀번호</label>
                <Input placeholder="비밀번호" widthPer="100%" />
              </div>
              <div>
                <label>비밀번호</label>
                <Input placeholder="비밀번호" widthPer="100%" />
              </div>
            </form>
            <ButtonEle
              backgroundColor="#E60B23"
              text="계속"
              margin="8px"
              widthPer="100%"
              fontSize="15px"
              height="40px"
            />
            <span class="or">또는</span>
            <ButtonEle
              backgroundColor="#F3DC01"
              text="카카오톡으로 계속하기"
              margin="8px"
              widthPer="100%"
              fontSize="15px"
              color="black"
              height="40px"
            />
            <span className="toLoginWrap">
              이미 회원이신가요?
              <b className="toLoginBtn">로그인하기</b>
            </span>
            <footer className="footer">
              <div>
                frontEnd
                <b>이형섭님. 이담님</b>
              </div>
              <div>
                backEnd
                <b>이창민님. 정연욱님. 정오현님</b>
              </div>
            </footer>
          </div>
          <HighlightOffIcon className="Xicon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
