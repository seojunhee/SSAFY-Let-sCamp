import React from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"
import "./style/Button.css"

import { Link, useNavigate } from "react-router-dom";

const RecommendResult = () => {
  
  return (
    <div style={{height: "100%"}}>
      <Header pageName="캠핑장 추천"/>
      <CampSite />
      <MoreButton />
    </div>
  )


}

export default RecommendResult;