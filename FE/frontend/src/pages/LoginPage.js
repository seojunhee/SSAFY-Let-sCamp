import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Login.css";
import axios from "axios";
import { userState } from "../Store/state.js";
import { useRecoilState } from "recoil";

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
      <div className="top">
        <span
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          &lt;
        </span>
        <span>로그인</span>
      </div>
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
      <div className="sub">
        <Link to="/signup">
          <span className="signup">회원가입 </span>
        </Link>
        <span className="findpw">비밀번호 찾기</span>
      </div>
      <div>리코일 사용 {user}</div>
    </div>
  );
};

export default Login;
