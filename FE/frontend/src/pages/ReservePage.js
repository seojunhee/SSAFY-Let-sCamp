import React, { useState } from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSiteInfo from "../Components/Reserve/CampSiteInfo.js";
import ReservationDateInfo from "../Components/Reserve/ReservationDateInfo.js";
import ReservationPeopleInfo from "../Components/Reserve/ReservationPeopleInfo.js"
import ReserveBtn from "../Components/Reserve/ReserveBtn.js";

import { useSetRecoilState } from "recoil";
import { pageNameState } from "../Store/state.js";


import { Link, useNavigate, useLocation } from "react-router-dom";

const Reserve = () => {

  let location = useLocation();
  console.log(location.state.data)
  const campSiteData = location.state.data
  const [ isDateActive, setIsDateActive ] = useState(true)
  const [ isPeopleActive, setIsPeopleActive ] = useState(true)
  const [ dateContent, setDateContent ] = useState([])
  const [ peopleContent, setPeopleContent ] = useState("")


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
      <ReservationDateInfo 
        title="날짜"
        content = {dateContent}
        setContent = {setDateContent}
        isDateActive = {isDateActive}
        setIsDateActive = {setIsDateActive}
      />
      <ReservationPeopleInfo 
        title="인원" 
        content = {peopleContent}
        setContent = {setPeopleContent}
        isPeopleActive = {isPeopleActive}
        setIsPeopleActive = {setIsPeopleActive}
       />
      <hr/>
      <ReserveBtn />  

    </div>
  )

}

export default Reserve;