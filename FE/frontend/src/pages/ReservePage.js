import React from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSiteInfo from "../Components/Reserve/CampSiteInfo.js";
import ReservationInfo from "../Components/Reserve/ReservationInfo.js";

import { useSetRecoilState } from "recoil";
import { pageNameState } from "../Store/state.js";


import { Link, useNavigate } from "react-router-dom";

const Reserve = () => {
  const setPageName = useSetRecoilState(pageNameState);

  setPageName("캠핑장 예약");
  
  return (
    <div>
      <Header />
      <hr style={{"border": "solid 1px black", "backgroundColor" : "black"}}/>
      <CampSiteInfo />
      <hr style={{"border": "solid 1px black", "backgroundColor" : "black"}}/>
      <h3>예약 정보</h3>
      <ReservationInfo title="날짜" content="2022년 11월 25일 ~ 27일"/>
      <ReservationInfo title="인원" content="성인 2명 유아 1명 반려동물 1마리"/>

    </div>
  )

}

export default Reserve;