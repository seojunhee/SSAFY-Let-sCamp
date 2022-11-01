import React from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"
import NavBar from "../Components/NavBar/NavBar.js"

// css
import "./style/Button.css"


import { Link, useNavigate } from "react-router-dom";

const RecommendResult = () => {
  
  return (
    <div style={{height: "100%"}}>
      <Header pageName="캠핑장 추천"/>
      <CampSite />
      <MoreButton />
      <NavBar />
    </div>
  )


}

export default RecommendResult;