import React from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const ReserveBtn = (props) => {

  const navigate = useNavigate();
  const btnDisable = (props.dateContent == 0)

  const reserveCampSite = () => {
    console.log("예약")
    axios
      .post(props.url, {
        "category": props.campingCate,
        "endDate": props.dateContent[1],
        "startDate": props.dateContent[0],
        "countAdult": props.peopleContent["성인"],
        "countKid": props.peopleContent["유아"],
        "countPet": props.peopleContent["반려동물"]
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/", {state: {"data": response.data}});
      })
  }

  return (
    <div className="width-100">
      <button className={ btnDisable ? "reserve-button-disable" : "reserveButton"} disabled={btnDisable} onClick={reserveCampSite}>
        예약하기
      </button>
    </div>
  )
};

export default ReserveBtn;