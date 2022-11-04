import React, {useState} from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"
import NavBar from "../Components/NavBar/NavBar.js"

// css
import "./style/Button.css"

// api
import letsCamp from "../api/LetsCamp";


import { Link, useNavigate, useLocation } from "react-router-dom";

const RecommendResult = () => {
  let location = useLocation();
  // console.log('state', location.state.data);
  const campSiteList = location.state.data
  // const [campSiteList, setCampSiteList] = useState( { campSiteData } )
  const numberOfCampSite = (campSiteList).length
  const [listIdx, setListIdx] = useState(0)
  
  return (
    <div style={{height: "100%"}}>
      <Header pageName="캠핑장 추천"/>
      <CampSite 
        campSiteList={ campSiteList }
        listIdx={listIdx}
        setListIdx={setListIdx}
      />
      <MoreButton 
        campSiteList={ campSiteList }
        listIdx={listIdx}
        setListIdx={setListIdx}
        numberOfCampSite={numberOfCampSite}
      />
      <NavBar />
    </div>
  )


}

export default RecommendResult;