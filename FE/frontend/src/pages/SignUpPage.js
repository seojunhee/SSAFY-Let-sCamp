import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header.js";
import "./style/SignUp.css";

const SignUp = () => {
  return (
    <div className="SignUp">
      <Header pageName={"회원가입"}></Header>
      <div className="SignUp-subtitle-box">
        <div className="SignUp-subtitle">회원정보를 입력해주세요</div>
      </div>
      <div className="SignUp-input-box">
        <div>
          <input placeholder="아이디(이메일)" className="SignUp-input" />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="닉네임" className="SignUp-input" />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="주소" className="SignUp-input" />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            className="SignUp-input"
            type="password"
          />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input
            placeholder="비밀번호 확인"
            className="SignUp-input"
            type="password"
          />
          <hr className="SignUp-line" />
        </div>
      </div>
      <div>
        <Link to="/mypage">
          <button className="SignUp-submit">회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
