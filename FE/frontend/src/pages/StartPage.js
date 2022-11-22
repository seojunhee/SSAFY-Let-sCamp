import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./style/StartPage.css";
import "../App.css";

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      navigate("/main");
    }
  });

  return (
    <div className="startpage">
      <div className="startpage-title">초보자를 위한 캠핑 추천 서비스</div>
      <img src="/asset/logo.png" alt="이미지" className="startpage-img" />

      <div className="startpage-buttonsbox">
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/question");
            }}
          >
            추천받기
          </button>
        </div>
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        </div>
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
