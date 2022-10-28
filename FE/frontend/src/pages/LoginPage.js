import React from "react";
import { Link } from "react-router-dom";
import "./style/Login.css";
import axios from "axios";
import { pageNameState, userState } from "../Store/state.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import Header from "../Components/Header/Header.js";

const Login = () => {
  const [user] = useRecoilState(userState);

  const setPageName = useSetRecoilState(pageNameState);
  setPageName("로그인");

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
      <Header></Header>
      <div>
        <input placeholder="아이디" className="input" />
      </div>
      <div>
        <input placeholder="비밀번호" className="input" type="password" />
      </div>
      <div>
        <button className="button" onClick={submit}>
          로그인
        </button>
      </div>
      <div className="subbox">
        <div className="sub">
          <Link to="/signup">
            <span className="signup">회원가입 </span>
          </Link>
          <span className="findpw">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
