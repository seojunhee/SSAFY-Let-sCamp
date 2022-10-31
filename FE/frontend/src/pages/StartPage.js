import React from "react";
import { Link } from "react-router-dom";
import "./style/StartPage.css";

const Start = () => {
  return (
    <div className="startpage">
      <img src="/asset/campingcar.png" alt="이미지" className="startpage-img" />
      <div className="startpage-title">초보자를 위한 캠핑 추천 서비스</div>
      <div className="startpage-title2">렛츠 캠프!</div>
      <div className="startpage-buttonsbox">
        <div>
          <Link to="/question">
            <button className="startpage-button">
              가입 없이 <br></br>바로 추천받으러 가기
            </button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button className="startpage-button">로그인</button>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <button className="startpage-button">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
