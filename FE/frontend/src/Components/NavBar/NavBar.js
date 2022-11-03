import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <img
          src="/asset/icons/Frame1.png"
          alt="홈으로"
          className="navbar-icon"
          onClick={() => {
            navigate("/main");
          }}
        ></img>
        <img
          src="/asset/icons/Frame2.png"
          alt="추천페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/question");
          }}
        ></img>
        <img
          src="/asset/icons/Frame3.png"
          alt="지도페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/map");
          }}
        ></img>
        <img
          src="/asset/icons/Frame4.png"
          alt="예약페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/mypage");
          }}
        ></img>
        <img
          src="/asset/icons/Frame5.png"
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
