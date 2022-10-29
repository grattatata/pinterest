import React from "react";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderWrap>
          <HeaderLeft>
            <FontAwesomeIcon
              style={{
                marginRight: "8px",
                color: "#E60B23",
              }}
              icon={faPinterest}
            />
            <span
              style={{
                color: "#E60B23",
              }}
            >
              <b
                style={{
                  fontWeight: 700,
                }}
              >
                Hang
              </b>
              terest
            </span>
          </HeaderLeft>

          {isLogin ? (
            <>
              <HeaderCenter>
                <SearchInput
                  type="text"
                  placeholder="검색"
                  onKeyPress={onCheckEnter}
                />
              </HeaderCenter>
              <HeaderRight>
                <ButtonEle
                  marginRight="8px"
                  backgroundColor="#E60B23"
                  text="채팅"
                />
                <UserImage size="small" toMyPage={toMyPage} />
              </HeaderRight>
            </>
          ) : (
            <HeaderRight>
              <ButtonEle
                marginRight="8px"
                backgroundColor="#E60B23"
                text="로그인"
                handleClick={handleLogin}
              />
              <ButtonEle
                backgroundColor="#efefef"
                color="black"
                text="가입하기"
                handleClick={handleSignUp}
              />
            </HeaderRight>
          )}
        </HeaderWrap>
      </HeaderStyle>
      <Outlet />
      {isLoginModalOpen ? (
        <Modal
          text="로그인"
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
          setIsLogin={setIsLogin}
        />
      ) : null}
      {isSignupModalOpen ? (
        <Modal
          text="signup"
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
        />
      ) : null}
    </>
  );
};
export default Header;
