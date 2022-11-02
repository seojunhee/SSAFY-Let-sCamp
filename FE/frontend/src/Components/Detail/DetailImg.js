import React from "react";
import "./style/DetailImg.css";

const DetailImg = () => {
  return (
    <div className="detailimg">
      <div className="detailimg-title">캠핑장 이름</div>
      <img
        src="/asset/campingcar.png"
        alt="대충 이미지"
        className="detailimg-img"
      />
    </div>
  );
};

export default DetailImg;
