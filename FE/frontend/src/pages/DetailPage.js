import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Contents from "../Components/Detail/Contents";
import DetailImg from "../Components/Detail/DetailImg";
import Review from "../Components/Detail/Review";
import NavBar from "../Components/NavBar/NavBar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { campSiteState } from "../Store/state.js";
import { useLocation, useNavigate } from "react-router-dom";
import LetsCamp from "../api/LetsCamp";

const Detail = () => {
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);
  const [starPoint, setStarPoint] = useState(0)

  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.campingId;
  const urlStar = LetsCamp.review.rate(id)

  const toReserve = () => {
    sessionStorage.setItem("reserveInfo", JSON.stringify(campSiteData))
    // console.log(sessionStorage.getItem("reserveInfo"))
    navigate("/reserve", {state: {"data": campSiteData}});
  }


  useEffect(() => {
    const url = LetsCamp.camping.getOne(id);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log("성공");
        SetCampSite(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
    axios
      .get(urlStar, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        setStarPoint(response.data);
      });
    
  }, []);

  return (
    <div className="App recycle-page">
      <Header></Header>
      <Contents
        starPoint={starPoint}
      ></Contents>
      <div className="reserve-btn-box my-5">
        <button onClick={ toReserve } className="w-btn w-btn-blue">Let's Camp!</button>
      </div>
      {id 
      ? <Review
          id={id}
        ></Review> 
      : <div></div>}
      <NavBar></NavBar>
    </div>
  );
};

export default Detail;
