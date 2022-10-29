import React from "react";

const Login = () => {
  return (
    <div className="modalBackground">
      <div className="signup-default-modal">
        <div className="modalContainer">
          <h1 className="login-title">pinterest 오신 것을 환영합니다</h1>
          <div className="FormWrap">
            <form className="registerForm">
              <div>
                <label className="label">이메일</label>
                <Input
                  placeholder="이메일"
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
              <p>푸터</p>
            </footer>
          </div>
          <HighlightOffIcon className="Xicon" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Login;
