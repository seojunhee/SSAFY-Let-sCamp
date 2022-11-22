import React, {useState} from "react";

import { Link, useNavigate } from "react-router-dom";

//component
// import ModalBasic from './SlideUpModal.js'

//css
import "./style/MoreButton.css"

// import axios from "axios";
const MoreButton = (props) => {

  const navigate = useNavigate();
  
  const campSiteData = props.campSiteList[props.listIdx]

  const showMap = () => {
    navigate("/map", {state : {lat: campSiteData.lat, lon: campSiteData.lon, name: campSiteData.name}})
  }

  const toReserve = () => {
    sessionStorage.setItem("reserveInfo", JSON.stringify(campSiteData))
    // console.log(sessionStorage.getItem("reserveInfo"))
    console.log(sessionStorage.getItem("accessToken"))
    if (sessionStorage.getItem("accessToken") == null) {
      alert('로그인이 필요한 페이지 입니다.')
      navigate("/login", {state: {"data": props.campSiteList}})
    } else {
      navigate("/reserve", {state: {"data": campSiteData}});
    }
  }

  return (
    <>
      <div className="container">

        <button onClick={ showMap } className="w-btn">지도 보기</button>

        <button onClick={ toReserve } className="w-btn w-btn-blue">Let's Camp!</button>
      </div>
      {/* 모달 적용해서 띄우기 */}
      {/* <div className="more container" onClick={showModal}>{"더 알아보기"}</div> */}
    </>
  )
};

export default MoreButton;