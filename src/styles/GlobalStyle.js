import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        margin: 0;
    };
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        /* font-family: 'Ubuntu Mono', monospace; */
        // font-family: 'Space Mono', monospace;
        box-sizing: content-box;
        width:100%;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
    .modalBackground{
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: ruba(200,200,200);
    };
    .modalContainer{
        width: 400px;
        height: 600px;
        background-color: rgb(255, 255, 255);
        border-radius: 32px;
        display: flex;
        padding: 25px;
        box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
    }
    .modal-header{
        margin-top:30px;
    }
    .login-title{
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: rgb(51, 51, 51);
        font-size: 32px;
        font-weight: 550;
        letter-spacing: 0.2px;
        line-height: 40px;
        padding-left: 16px;
        padding-right: 16px;
    }
    .login-form{
        text-align: center;
        margin: 0 85px auto;
    }
`;

export default GlobalStyle;
