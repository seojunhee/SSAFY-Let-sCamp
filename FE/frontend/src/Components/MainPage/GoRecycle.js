import React from "react";
import "./style/GoRecycle.css";

const GoRecycle = () => {
  return (
    <div className="main-gorecycle">
      <div className="main-goitems-box">
        <img src="/asset/box.gif" alt="" className="main-goitems-boximg"></img>
        <div className="">
          <div className="main-goitems-text">
            쓰레기 분리수거가 필요하신가요?
          </div>
          <button className="main-goitems-btn">분리수거하러 가기</button>
        </div>
      </div>
    </div>
  );
};

export default GoRecycle;
