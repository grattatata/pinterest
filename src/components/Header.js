import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import ButtonEle from "../elements/ButtonEle";
import { TextField } from "@mui/material";
import { InputUnstyled } from "@mui/base";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

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
              {/* <InputUnstyled
                style={{
                  width: "90%",
                  height: "100%",
                  backgroundColor: "#E1E1E1",
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "20px",
                }}
              /> */}
              {/* <TextField
                style={{
                }}
                id="fullWidth"
              /> */}
            </HeaderCenter>
            <HeaderRight>
              <ButtonEle
                marginRight="8px"
                backgroundColor="#E60B23"
                text="로그인"
              />
              <ButtonEle
                backgroundColor="#efefef"
                color="black"
                text="가입하기"
              />
            </HeaderRight>
          </>
        ) : (
          <HeaderRight>
            <ButtonEle
              marginRight="8px"
              backgroundColor="#E60B23"
              text="로그인"
            />
            <ButtonEle
              backgroundColor="#efefef"
              color="black"
              text="가입하기"
            />
          </HeaderRight>
        )}
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
`;

const HeaderCenter = styled.div`
  width: 100%;
`;

const HeaderRight = styled.div`
  margin-right: 20px;
  width: 250px;
  display: flex;
  justify-content: right;
`;

// const HeaderRightWrap = styled.div`
//   display: Flex;
//   width: 100%;
// `;

const SearchInput = styled.input`
  all: unset;
  width: 90%;
  height: 100%;
  background-color: #e1e1e1;
  outline: none;
  font-size: 16px;
  border-radius: 30px;
  text-align: left;
  padding: 8px 18px;
`;

export default Header;
