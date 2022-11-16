import React from "react";
import "./style/Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="mainpage-main">
      <div className="mainpage-main-box">
        <img src="/asset/search.gif" alt="" className="mainpage-main-img"></img>
        <div className="mainpage-main-text">
          당신에게 딱 맞는 <br></br> 캠핑장을 추천받으려면?
          <div
            className="mainpage-main-navigation"
            onClick={() => navigate("/question")}
          >
            추천받기&gt;
          </div>
        </div>
      </div>
      <div className="mainpage-main-box">
        <div className="mainpage-main-text">
          가고싶은 캠핑장<br></br> 검색하고 예약까지!
          <div
            className="mainpage-main-navigation"
            onClick={() => navigate("/search")}
          >
            검색하러 가기&gt;
          </div>
        </div>
        <img
          src="/asset/calender.gif"
          alt=""
          className="mainpage-main-img"
        ></img>
      </div>
    </div>
  );
};

export default Main;
