import React, {useState} from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSite from "../Components/RecommResultPage/CampSite.js";
import MoreButton from "../Components/RecommResultPage/MoreButton.js"
import NavBar from "../Components/NavBar/NavBar.js"
import ModalBasic from '../Components/RecommResultPage/SlideUpModal.js'

// css
import "./style/Button.css"

import { Link, useNavigate, useLocation } from "react-router-dom";

const RecommendResult = () => {
  let location = useLocation();
  const campSiteList = location.state.data;
  const numberOfCampSite = (campSiteList).length;
  const [listIdx, setListIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  

  return (
    <div style={{height: "100%"}}>
      <Header pageName="캠핑장 추천"/>
      <CampSite 
        campSiteList={ campSiteList }
        listIdx={listIdx}
        setListIdx={setListIdx}
        setModalOpen={setModalOpen}
      />
      <MoreButton 
        campSiteList={ campSiteList }
        listIdx={listIdx}
        setListIdx={setListIdx}
        numberOfCampSite={numberOfCampSite}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {
        (<ModalBasic
        campSiteList={ campSiteList }
        listIdx={listIdx}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />)}
      
      <NavBar />
    </div>
  )


}

export default RecommendResult;