import React from "react";
import "./style/GoRecycle.css";
import { useNavigate } from "react-router-dom";

const GoRecycle = () => {
  const navigate = useNavigate();

  return (
    <div className="main-gorecycle">
      <div className="main-gorecycle-box">
        <img
          src="/asset/recycle.gif"
          alt=""
          className="main-gorecycle-boximg"
        ></img>
        <div className="">
          <div className="main-gorecycle-text">
            쓰레기 분리수거가 <br></br> 필요하신가요?
          </div>
          <button
            className="main-gorecycle-btn"
            onClick={() => navigate("/recycle")}
          >
            분리수거 <br></br>페이지로
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoRecycle;
