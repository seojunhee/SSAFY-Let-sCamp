import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Contents from "../Components/Detail/Contents";
import DetailImg from "../Components/Detail/DetailImg";
import Review from "../Components/Detail/Review";
import NavBar from "../Components/NavBar/NavBar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { campSiteState } from "../Store/state.js";
import { useLocation } from "react-router-dom";
import LetsCamp from "../api/LetsCamp";

const Detail = () => {
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);

  const location = useLocation();
  const id = location.state.campingId;

  const urlStar = LetsCamp.review.rate(id)
  let starPoint = 0

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
        starPoint = (response.data);
        console.log(starPoint);
      })
  }, []);

  return (
    <div className="App recycle-page">
      <Header pageName={"상세 정보"}></Header>
      <Contents></Contents>
      {id ? <Review id={id} starPoint={starPoint}></Review> : <div></div>}
      <NavBar></NavBar>
    </div>
  );
};

export default Detail;
