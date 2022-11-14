import React from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

// api
import letsCamp from "../../api/LetsCamp";



const ReserveBtn = (props) => {

  const navigate = useNavigate();
  const btnDisable = (props.dateContent == 0)

  const reserveCampSite = () => {
    console.log("예약")
    console.log({
      "category": props.campingCate,
      "endDate": props.dateContent[1],
      "startDate": props.dateContent[0],
      "countAdult": props.peopleContent["성인"],
      "countKid": props.peopleContent["유아"],
      "countPet": props.peopleContent["반려동물"]
    })

    const resisterUrl = (reserveId) => {
      switch (props.campingCate) {
        case "일반야영장":
          return letsCamp.normal.add(reserveId)
        case "글램핑":
          return letsCamp.glamping.add(reserveId)
        case "카라반":
          return letsCamp.caraban.add(reserveId)
        case "자동차야영장":
          return letsCamp.carcamping.add(reserveId)
      }
    }

    axios
      .post(props.url, {
        "category": props.campingCate,
        "endDate": props.dateContent[1],
        "startDate": props.dateContent[0],
        "countAdult": props.peopleContent["성인"],
        "countKid": props.peopleContent["유아"],
        "countPet": props.peopleContent["반려동물"]
      },
      {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken")
        }
      })
      .then(function (response) {
        console.log(response.data.id)
        const resisterPostUrl = resisterUrl(response.data.id)
        console.log(resisterPostUrl)
        axios
        .post(resisterPostUrl, {}, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken")
        }
      })
        navigate("/main");
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