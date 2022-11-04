import React, {useState} from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"
import NavBar from "../Components/NavBar/NavBar.js"

// css
import "./style/Button.css"


import { Link, useNavigate, useLocation } from "react-router-dom";

const RecommendResult = () => {
  let location = useLocation();
  // console.log('state', location.state.data);
  const campSiteList = location.state.data
  // const [campSiteList, setCampSiteList] = useState( { campSiteData } )
  // console.log(campSiteList)
  
  
  return (
    <div style={{height: "100%"}}>
      <Header pageName="캠핑장 추천"/>
      <CampSite 
        campSiteList={ campSiteList }
      />
      <MoreButton />
      <NavBar />
    </div>
  )


}

export default RecommendResult;