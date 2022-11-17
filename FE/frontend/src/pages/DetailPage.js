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
    
  }, []);

  return (
    <div className="App recycle-page">
      <Header pageName={"상세 정보"}></Header>
      <Contents></Contents>
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
