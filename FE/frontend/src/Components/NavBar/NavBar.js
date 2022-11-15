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
          alt="검색페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/search");
          }}
        ></img>
        <img
          src="/asset/icons/recomm.png"
          alt="추천페이지"
          className="navbar-icon"
          onClick={() => {
            navigate("/question");
          }}
        ></img>
        <img
          src="/asset/icons/mypage.png"
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
