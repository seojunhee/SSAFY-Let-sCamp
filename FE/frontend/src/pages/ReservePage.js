import React from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSiteInfo from "../Components/Reserve/CampSiteInfo.js";

import { useSetRecoilState } from "recoil";
import { pageNameState } from "../Store/state.js";


import { Link, useNavigate } from "react-router-dom";

const Reserve = () => {
  const setPageName = useSetRecoilState(pageNameState);

  setPageName("캠핑장 예약");
  
  return (
    <div>
      <Header />
      <CampSiteInfo />
    </div>
  )

}

export default Reserve;