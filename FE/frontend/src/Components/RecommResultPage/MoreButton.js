import React from "react";

import { Link, useNavigate } from "react-router-dom";

//css
import "./style/MoreButton.css"

// import axios from "axios";
const MoreButton = (props) => {

  const navigate = useNavigate();
  
  const changeIdx = () => {
    props.setListIdx((props.listIdx + 1) % props.numberOfCampSite)
  }

  const toReserve = () => {
    navigate("/reserve", {state: {"data": props.campSiteList[props.listIdx]}});
  }

  return (
    <>
      <div className="container">
        <button onClick={ changeIdx } className="w-btn w-btn-again">다시 추천 받기</button>
        <button onClick={ toReserve } className="w-btn w-btn-blue">Let's Camp!</button>
      </div>
      {/* 모달 적용해서 띄우기 */}
      <div className="more container">더 알아보기</div>
    </>
  )
};

export default MoreButton;