import React from "react"

// Components
import Header from "../Components/RecommResultPage/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"

import { Link, useNavigate } from "react-router-dom";

const RecommendResult = () => {
  
  return (
    <div>
      <Header />
      <CampSite />
      <MoreButton />
    </div>
  )


}

export default RecommendResult;