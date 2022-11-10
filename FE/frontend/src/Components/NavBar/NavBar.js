import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <img
          src="/asset/icons/home.png"
          alt="홈으로"
          className="navbar-icon"
          onClick={() => {
            navigate("/main");
          }}
        ></img>
        <img
          src="/asset/icons/search.png"
          alt="추천페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/question");
          }}
        ></img>
        <img
          src="/asset/icons/map.png"
          alt="지도페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/map");
          }}
        ></img>
        <img
          src="/asset/icons/bell.png"
          alt="예약페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/mypage");
          }}
        ></img>
        <img
          src="/asset/icons/my.png"
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
