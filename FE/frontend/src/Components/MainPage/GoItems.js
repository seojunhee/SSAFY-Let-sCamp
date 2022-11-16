import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/GoItems.css";

const GoItems = () => {
  const navigate = useNavigate();

  return (
    <div className="main-goitems">
      <div className="main-goitems-box">
        <img src="/asset/box.gif" alt="" className="main-goitems-boximg"></img>
        <div className="">
          <div className="main-goitems-text">
            준비물을 <br></br>챙겨볼까요?
          </div>
          <button
            className="main-goitems-btn"
            onClick={() => navigate("/item")}
          >
            준비물 챙기기
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoItems;
