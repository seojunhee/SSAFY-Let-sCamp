import React from "react";
import "./style/GoItems.css";

const GoItems = () => {
  return (
    <div className="main-goitems">
      <div className="main-goitems-box">
        <img src="/asset/box.gif" alt="" className="main-goitems-boximg"></img>
        <div className="">
          <div className="main-goitems-text">
            준비물을 <br></br>챙겨볼까요?
          </div>
          <button className="main-goitems-btn">준비물 챙기기</button>
        </div>
      </div>
    </div>
  );
};

export default GoItems;
