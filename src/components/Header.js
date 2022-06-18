import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import ButtonEle from "../elements/ButtonEle";
import UserImage from "../elements/UserImage";
import LoginModal from "./Login";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
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
              <SearchInput type="text" placeholder="검색" />
            </HeaderCenter>
            <HeaderRight>
              <ButtonEle
                marginRight="8px"
                backgroundColor="#E60B23"
                text="채팅"
              />
              <UserImage small />
            </HeaderRight>
          </>
        ) : (
          <HeaderRight>
            <ButtonEle
              marginRight="8px"
              backgroundColor="#E60B23"
              text="로그인"
              onClick={setModal}
            />
            {modalIsOpen === true ? (
              <LoginModal closeModal={setModalIsOpen} />
            ) : null}
            <ButtonEle
              backgroundColor="#efefef"
              color="black"
              text="가입하기"
            />
            {console.log(modalIsOpen)}
          </HeaderRight>
        )}
        {/* <LoginModal open={modalIsOpen} onClose={() => setModalIsOpen(false)} /> */}
      </HeaderWrap>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  height: 80px;
  width: 100%;
  z-index: 9999;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderLeft = styled.div`
  display: Flex;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Space Mono", monospace;
`;

const HeaderCenter = styled.div`
  width: 100%;
`;

const HeaderRight = styled.div`
  margin-right: 20px;
  width: 250px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

// const HeaderRightWrap = styled.div`
//   display: Flex;
//   width: 100%;
// `;

const SearchInput = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
  outline: none;
  font-size: 16px;
  border-radius: 30px;
  text-align: left;
  padding: 8px 18px;
`;

export default Header;
