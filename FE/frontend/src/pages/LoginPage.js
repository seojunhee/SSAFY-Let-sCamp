import React from "react";
import "./style/Login.css";
import axios from "axios";
import { userState } from "../Store/state.js";
import { useRecoilState } from "recoil";
import Header from "../Components/Header/Header.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);

  const url = "주소값";
  const submit = () => {
    axios
      .get(url, {
        params: user,
      })
      .then(function (response) {
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  };
  return (
    <div className="Login">
      <Header pageName={"로그인"}></Header>
      <div className="inputbox">
        <div>
          <input placeholder="아이디" className="input" />
          <hr className="Login-underline" />
        </div>
        <div>
          <input placeholder="비밀번호" className="input" type="password" />
          <hr className="Login-underline" />
        </div>
      </div>
      <div>
        <button className="button" onClick={submit}>
          로그인
        </button>
      </div>
      <div className="subbox">
        <div className="sub">
          <span
            className="signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입{" "}
          </span>
          <span className="findpw">아이디/비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
