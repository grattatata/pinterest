import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import "../styles/postDetail.css";

import Input from "../elements/Input";
import UserImage from "../elements/UserImage";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostDetail } from "../store/postReducer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PostDetail = () => {
  const params = useParams();
  const boardId = Number(params.postId);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPostDetail(boardId));
  }, []);

  const handleDelete = () => {
    dispatch(deletePost(boardId));
  };

  return (
    <PostDetailStyle>
      {post[0]?.postDetail?.title !== undefined ? (
        <FormWrap>
          <FormStyle encType="multipart/form-data">
            <ColumnWrap>
              <ColumnLeft>
                <Label htmlFor="input-file" className="img_label">
                  <ImageTag src={post[0].postDetail.imageUrl} alt="image" />
                </Label>
              </ColumnLeft>

              <ColumnRight>
                {/* SubmitButtonWrap */}
                <ButtonContainer>
                  <LeftBtns>
                    <ContentCopyIcon className="button" />
                    <PrivateBtn>
                      <EditIcon className="button" />
                      <DeleteIcon onClick={handleDelete} className="button" />
                    </PrivateBtn>
                  </LeftBtns>

                  <SubmitInput type="submit" value="저장" />
                </ButtonContainer>

                <div>
                  <ContentsInfo>
                    <MetaInfo>
                      <ContentsTitle>{post[0].postDetail.title}</ContentsTitle>
                      <ContentsText>{post[0].postDetail.content}</ContentsText>
                    </MetaInfo>
                    <UserProfileWrap>
                      <UserImage size="small" />

                      <span>{post[0].postDetail.nickname}</span>
                    </UserProfileWrap>
                  </ContentsInfo>

                  <CommentsContents>
                    <CommentCount>
                      댓글<span>0개</span>
                    </CommentCount>
                    <CommentsLists></CommentsLists>
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
      ) : null}
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

const ColumnLeft = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.div`
  /* height: 60vh; */
  height: 600px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
`;

const ImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const ButtonContainer = styled.div`
  display: Flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftBtns = styled.div`
  display: Flex;
`;

const PrivateBtn = styled.div``;

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
  position: relative;
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
