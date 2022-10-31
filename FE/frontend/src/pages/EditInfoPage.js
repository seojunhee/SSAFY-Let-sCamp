import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header.js";
import "./style/EditInfoPage.css";

const EditInfoPage = () => {
  return (
    <div className="editinfo">
      <Header pageName={"회원정보 수정"}></Header>
      <div className="editinfo-subtitle-box">
        <div className="editinfo-subtitle">회원정보를 수정해주세요</div>
      </div>
      <div className="editinfo-input-box">
        <div>
          <input
            placeholder="아이디(이메일) 수정불가"
            className="editinfo-input"
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input placeholder="닉네임" className="editinfo-input" />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input placeholder="주소" className="editinfo-input" />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            className="editinfo-input"
            type="password"
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder="비밀번호 확인"
            className="editinfo-input"
            type="password"
          />
          <hr className="editinfo-underline" />
        </div>
      </div>
      <div>
        <Link to="/signupsucess">
          <button className="editinfo-submit">변경</button>
        </Link>
      </div>
    </div>
  );
};

export default EditInfoPage;
