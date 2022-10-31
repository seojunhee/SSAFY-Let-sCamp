import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <img
          src="/asset/icons/Frame 1.png"
          alt="홈으로"
          className="navbar-icon"
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <img
          src="/asset/icons/Frame 2.png"
          alt="추천페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/question");
          }}
        ></img>
        <img
          src="/asset/icons/Frame 3.png"
          alt="지도페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/mypage");
          }}
        ></img>
        <img
          src="/asset/icons/Frame 4.png"
          alt="예약페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/mypage");
          }}
        ></img>
        <img
          src="/asset/icons/Frame 5.png"
          alt="마이페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/mypage");
          }}
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
