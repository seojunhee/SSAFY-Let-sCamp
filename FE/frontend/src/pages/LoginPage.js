import React, { useState } from "react";
import "./style/Login.css";
import axios from "axios";
import { userState } from "../Store/state.js";
import { useRecoilState } from "recoil";
import Header from "../Components/Header/Header.js";
import { useNavigate } from "react-router-dom";
import letsCamp from "../api/LetsCamp";

const Login = () => {
  const navigate = useNavigate();
  const [userData, SetUser] = useRecoilState(userState);
  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");

  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePw = (e) => {
    SetPw(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      submit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const submit = () => {
    const url = letsCamp.user.login(id, pw);
    axios
      .get(url)
      .then(function (response) {
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("refreshToken", response.data.refreshToken);
        const url2 = letsCamp.user.info();
        axios
          .get(url2, {
            headers: {
              Authorization: `Bearer ${sessionStorage.accessToken}`,
            },
          })
          .then(function (response) {
            SetUser(response.data);
            console.log(userData);
            !sessionStorage.getItem("reserveInfo")
              ? navigate("/main")
              : navigate("/reserve");
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log("실패");
        alert("아이디 혹은 비밀번호가 정확하지 않습니다.");
      });
  };
  return (
    <div className="login">
      <Header pageName={"로그인"}></Header>
      <img src="/asset/logo.png" alt="이미지" className="startpage-img" />
      <div className="login-inputbox">
        <div>
          <input
            placeholder="아이디"
            className="login-input"
            value={id}
            onChange={changeId}
          />
          <hr className="login-underline" />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            className="login-input"
            type="password"
            value={pw}
            onChange={changePw}
            onKeyPress={handleOnKeyPress}
          />
          <hr className="login-underline" />
        </div>
      </div>
      <div>
        <button className="login-button" onClick={submit}>
          로그인
        </button>
      </div>
      <div className="login-subbox">
        <div className="login-sub">
          <span
            className="login-signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입{" "}
          </span>
          <span className="login-findpw">아이디/비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
