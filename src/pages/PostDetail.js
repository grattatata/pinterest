import React from "react";
import styled from "styled-components";

import { TextareaAutosize } from "@mui/base";
import { TextField } from "@mui/material";
import Input from "../elements/Input";
import UserImage from "../elements/UserImage";

const PostDetail = () => {
  return (
    <PostDetailStyle>
      <FormWrap>
        <FormStyle encType="multipart/form-data">
          <ColumnWrap>
            <ColumnLeft>
              <Label htmlFor="input-file" className="img_label">
                이미지업로드
                <FileInput
                  multiple
                  type="file"
                  accept="image/*"
                  id="input-file"
                  style={{ display: "none" }}
                />
              </Label>
            </ColumnLeft>

            <ColumnRight>
              {/* SubmitButtonWrap */}
              <SubmitInput type="submit" value="저장" />

              {/* MetaInfoWrap */}
              <div>
                <ContentsInfo>
                  <MetaInfo>
                    <ContentsTitle>My favorite picture</ContentsTitle>
                    <ContentsText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate odit minus quo quia quam corrupti illum,
                      delectus quas id voluptatibus ratione, velit itaque
                      veritatis neque explicabo at labore alias sequi?
                    </ContentsText>
                  </MetaInfo>
                  <UserProfileWrap>
                    <UserImage size="small" />
                    <span>Leonardo</span>
                  </UserProfileWrap>
                </ContentsInfo>

                <CommentsContents>
                  <CommentCount>
                    댓글<span>3개</span>
                  </CommentCount>
                  <CommentsLists>
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>vennydev</CommentAuthor>
                        <CommentText>
                          이런 그림은 어떻게 그리시죠? 대단하시넹요!
                        </CommentText>
                      </CommentWrap>
                    </Comment>
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>supsuplee</CommentAuthor>
                        <CommentText>진심...대박</CommentText>
                      </CommentWrap>
                    </Comment>{" "}
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>{" "}
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>{" "}
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>
                    <Comment>
                      <UserProfileWrap>
                        <UserImage size="small" />
                      </UserProfileWrap>
                      <CommentWrap>
                        <CommentAuthor>sup421</CommentAuthor>
                        <CommentText>오바한다;</CommentText>
                      </CommentWrap>
                    </Comment>
                  </CommentsLists>
                </CommentsContents>

                <CommentFill>
                  <UserProfileWrap>
                    <UserImage />
                  </UserProfileWrap>
                  <CommentInputWrap>
                    <Input placeholder="댓글 추가" widthPer="100"></Input>
                  </CommentInputWrap>
                </CommentFill>
              </div>
            </ColumnRight>
          </ColumnWrap>
        </FormStyle>
      </FormWrap>
    </PostDetailStyle>
  );
};

const PostDetailStyle = styled.div`
  background-color: #efefef;
  box-sizing: border-box;
  width: 100%;
  z-index: 9999;
  padding: 28px 0px;
  display: flex;
  justify-content: center;
  top: 80px;
`;

const FormWrap = styled.div`
  height: 70%;
  width: 880px;
  border-radius: 16px;
  z-index: 9998;
  background-color: white;
  padding: 40px 40px 0px 40px;
`;

const FormStyle = styled.form`
  padding: 30px 10px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ColumnWrap = styled.div`
  margin: 0 auto;
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  background-color: #eaedef;
  cursor: pointer;
  height: 60vh;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  color: #bcbcbc;
  :hover {
    background-color: #bcbcbc;
    color: white;
  }
`;

const FileInput = styled.input`
  cursor: pointer;
  width: 150px;
`;

const ColumnRight = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  align-content: right;
`;

const ColumnLeft = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubmitInput = styled.input`
  display: inline-block;
  background-color: rgb(230, 0, 35);
  border: none;
  cursor: pointer;
  height: 40px;
  outline: 0px;
  padding: 0px 14px;
  border-radius: 0px 8px 8px 0px;
  pointer-events: auto;
  width: 60px;
  color: white;
  font-size: 15px;
  text-align: center;
  padding-left: 12px;
  margin-bottom: 20px;
  /* position: relative;
  left: 290px; */
  align-self: end;
  :hover {
    background-color: silver;
  }
`;

const ContentsInfo = styled.div``;

const MetaInfo = styled.div`
  margin: 10px 0px;
`;

const ContentsTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 8px 0px;
`;

const ContentsText = styled.div`
  word-spacing: -4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 61px;
  line-height: 19px;
  overflow: scroll;
`;

const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 15%;
  margin-top: 10px;
`;

// = styled.div``;

const CommentsContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const CommentCount = styled.div``;

const CommentsLists = styled.ul`
  display: Flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px;
`;

const Comment = styled.ul`
  display: Flex;
  align-items: center;
`;

const CommentWrap = styled.div`
  width: 85%;
`;

const CommentAuthor = styled.div`
  font-weight: 700;
  font-size: 16px;
  display: inline;
  margin-right: 4px;
`;

const CommentText = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const CommentFill = styled.div`
  display: Flex;
`;

const CommentInputWrap = styled.div`
  width: 85%;
`;
export default PostDetail;
