import React from "react";
import "./style/GoRecycle.css";

const GoRecycle = () => {
  return (
    <div className="main-gorecycle">
      <div className="main-gorecycle-box">
        <img
          src="/asset/box.gif"
          alt=""
          className="main-gorecycle-boximg"
        ></img>
        <div className="">
          <div className="main-gorecycle-text">
            쓰레기 분리수거가 <br></br> 필요하신가요?
          </div>
          <button className="main-gorecycle-btn">
            분리수거 <br></br>페이지로
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoRecycle;
