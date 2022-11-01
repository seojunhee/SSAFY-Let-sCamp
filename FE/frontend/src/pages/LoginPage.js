import React, { useState } from "react";
import "./style/Login.css";
import axios from "axios";
/*
import { userState } from "../Store/state.js";
import { useRecoilState } from "recoil";
*/
import Header from "../Components/Header/Header.js";
import { useNavigate } from "react-router-dom";
import letsCamp from "../api/LetsCamp";

const Login = () => {
  const navigate = useNavigate();
  //const [user] = useRecoilState(userState);
  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");

  //const url = "http://k7b308.p.ssafy.io:8080/api/user/login/" + id + "/" + pw;
  const url = letsCamp.user.login(id, pw);
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePw = (e) => {
    SetPw(e.target.value);
  };

  const submit = () => {
    console.log(url);

    axios
      .get(url)
      .then(function (response) {
        console.log("성공");
        console.log(response);
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("refreshToken", response.data.refreshToken);
        console.log(sessionStorage.getItem("accessToken"));
        console.log(sessionStorage.getItem("refreshToken"));
        navigate("/mypage");
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
          <input
            placeholder="아이디"
            className="input"
            value={id}
            onChange={changeId}
          />
          <hr className="Login-underline" />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            className="input"
            type="password"
            value={pw}
            onChange={changePw}
          />
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
