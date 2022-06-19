import React, { useState } from "react";
import Input from "../elements/Input";
import ButtonEle from "../elements/ButtonEle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "../styles/LoginNSignup.css";
import axios from "axios";
import { setCookie } from "../shared/cookie";
import { useNavigate } from "react-router-dom";

const Login = ({
  setIsLogin,
  closeModal,
  setIsLoginModalOpen,
  setIsSignupModalOpen,
}) => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("서버로 회원가입 데이터를 보냅니다.");
    console.log(loginValue);
    axios
      .post("http://dlckdals04.shop/user/login", loginValue)
      .then((response) => {
        setCookie("myToken", response.data.token, { path: "/" });
        alert("로그인이 완료되었습니다!");
        navigate("/post");
        setIsLogin(true);
        setIsLoginModalOpen(false);
      })
      .catch((error) => console.log(error));
  };

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
                <Input
                  placeholder="이메일"
                  widthPer="100%"
                  handleChange={handleChange}
                  name="email"
                />
              </div>

              <div>
                <label>비밀번호</label>
                <Input
                  placeholder="비밀번호"
                  widthPer="100%"
                  handleChange={handleChange}
                  name="password"
                />
              </div>
            </form>
            <ButtonEle
              backgroundColor="#E60B23"
              text="계속"
              margin="8px"
              widthPer="100%"
              fontSize="15px"
              height="40px"
              handleClick={handleSubmit}
            />
            <span className="or">또는</span>
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
              회원이 아니신가요?
              <b
                className="toLoginBtn"
                onClick={() => {
                  setIsSignupModalOpen(true);
                  setIsLoginModalOpen(false);
                }}
              >
                회원가입하기
              </b>
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
          <HighlightOffIcon className="Xicon" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Login;
