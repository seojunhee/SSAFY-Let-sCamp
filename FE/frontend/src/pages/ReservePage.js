import React, { useState } from "react"

// Components
import Header from "../Components/Header/Header.js";
import CampSiteInfo from "../Components/Reserve/CampSiteInfo.js";
import ReservationDateInfo from "../Components/Reserve/ReservationDateInfo.js";
import ReservationPeopleInfo from "../Components/Reserve/ReservationPeopleInfo.js"
import ReserveBtn from "../Components/Reserve/ReserveBtn.js";

// import { useSetRecoilState } from "recoil";
// import { pageNameState } from "../Store/state.js";

// api
import letsCamp from "../api/LetsCamp";


// import { Link, useNavigate, useLocation } from "react-router-dom";

const Reserve = () => {

  const campSiteData = JSON.parse(sessionStorage.getItem("reserveInfo"))
  // console.log(campSiteData.id)
  const url = letsCamp.reservation.reserve(campSiteData.id)
  const [ isDateActive, setIsDateActive ] = useState(true)
  const [ isPeopleActive, setIsPeopleActive ] = useState(true)
  const [ campingCate, setCampingCate ]  = useState(campSiteData.category.split(',')[0])
  const [ dateContent, setDateContent ] = useState([])
  const [ peopleContent, setPeopleContent ] = useState({"성인": 0, "유아": 0, "반려동물": 0})

  // console.log(!!peopleContent && !!dateContent)

  return (
    <div>
      <Header pageName={"캠핑장 예약"}/>
      <CampSiteInfo
        campSiteData = {campSiteData}
        
        setCampingCate = {setCampingCate}
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
        campSiteData={campSiteData}
        content = {peopleContent}
        setContent = {setPeopleContent}
        isPeopleActive = {isPeopleActive}
        setIsPeopleActive = {setIsPeopleActive}
       />
      <hr/>
      <div className="height-20vh display-block"></div>
      <ReserveBtn
        url = {url}
        campingCate = {campingCate}
        dateContent = {dateContent}
        peopleContent = {peopleContent}
      />

    </div>
  )

}

export default Reserve;