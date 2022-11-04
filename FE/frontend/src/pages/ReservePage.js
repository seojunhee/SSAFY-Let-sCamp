import React from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSiteInfo from "../Components/Reserve/CampSiteInfo.js";
import ReservationInfo from "../Components/Reserve/ReservationInfo.js";
import ReserveBtn from "../Components/Reserve/ReserveBtn.js";

import { useSetRecoilState } from "recoil";
import { pageNameState } from "../Store/state.js";


import { Link, useNavigate, useLocation } from "react-router-dom";

const Reserve = () => {

  let location = useLocation();
  console.log(location.state.data)
  const campSiteData = location.state.data
  
  return (
    <div>
      <Header pageName={"캠핑장 예약"}/>
      <CampSiteInfo
        campSiteData={campSiteData}
      />
      <hr/>
      <div className="grid">
        <h3 className="col-4">예약 정보</h3>
      </div>
      <ReservationInfo title="날짜" content="2022년 11월 25일 ~ 2022년 11월 27일"/>
      <ReservationInfo title="인원" content="성인 20명 유아 10명 반려동물 10마리"/>
      <hr/>
      <ReserveBtn />  

    </div>
  )

}

export default Reserve;