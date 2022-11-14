import React, {useState} from "react";

import { Link, useNavigate } from "react-router-dom";

//component
// import ModalBasic from './SlideUpModal.js'

//css
import "./style/MoreButton.css"

// import axios from "axios";
const MoreButton = (props) => {

  const navigate = useNavigate();
  

  const showModal = () => {
    props.setModalOpen(true)
  }

  const changeIdx = () => {
    props.setListIdx((props.listIdx + 1) % props.numberOfCampSite)
  }

  const toReserve = () => {
    sessionStorage.setItem("reserveInfo", JSON.stringify(props.campSiteList[props.listIdx]))
    // console.log(sessionStorage.getItem("reserveInfo"))
    console.log(sessionStorage.getItem("accessToken"))
    if (sessionStorage.getItem("accessToken") == null) {
      alert('로그인이 필요한 페이지 입니다.')
      navigate("/login", {state: {"data": props.campSiteList}})
    } else {
      navigate("/reserve", {state: {"data": props.campSiteList[props.listIdx]}});
    }
  }

  return (
    <>
      <div className="container">
        <button onClick={ changeIdx } className="w-btn w-btn-again">다시 추천 받기</button>
        <button onClick={ toReserve } className="w-btn w-btn-blue">Let's Camp!</button>
      </div>
      {/* 모달 적용해서 띄우기 */}
      <div className="more container" onClick={showModal}>{"더 알아보기"}</div>
    </>
  )
};

export default MoreButton;