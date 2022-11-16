import React, { useState } from "react";

import "./style/ReservationInfo.css"

const ReservationInfo = (props) => {

  const [ adultNum, setAdultNum ] = useState(2)
  const [ babyNum, setBabyNum ] = useState(0)
  const [ petNum, setPetNum ] = useState(0)

  const withPet = () => {
    setPetNum(1)
    props.setContent({"성인": adultNum, "유아": babyNum, "반려동물": 1})
  }

  const notPet = () => {
    setPetNum(0)
    props.setContent({"성인": adultNum, "유아": babyNum, "반려동물": 0})
  }

  const addAdultNum = () => {
    if (adultNum >= 4) {
      return
    }
    setAdultNum(adultNum + 1)
  }

  const minusAdultNum = () => {
    if (adultNum <= 1) {
      return
    }
    setAdultNum(adultNum - 1)
  }

  const addBabyNum = () => {
    setBabyNum(babyNum + 1)
  }

  const minusBabyNum = () => {
    if (babyNum <= 0) {
      return
    }
    setBabyNum(babyNum - 1)
  }

  const toggleIsActive = () => {
    props.setIsPeopleActive(!props.isPeopleActive)
    props.setContent({"성인": adultNum, "유아": babyNum, "반려동물": petNum})
  }

  return (
    <div>
      <div className="container">
        <div className="">
          <div className="text-left text-h3">
            {props.title}
          </div>
          <div className="text-left">
            {!props.isPeopleActive
            ?"성인 " + props.content["성인"] + "명 유아 " + props.content["유아"] + "명 반려동물 " + (!!props.content["반려동물"]? "동반": "비동반")
            : "인원 입력 후 완료 버튼을 눌러 주세요."}
          </div>
        </div>
        <button className="camp-site-detail-btn" onClick={toggleIsActive}>
          {!!props.isPeopleActive ? "완료" : "수정"}
        </button>
      </div>
      <div>
        {
          !!props.isPeopleActive
          ? (
            <div>
              <div className="outer-div">
                성인
              <div className="container">
              <button className="add-minus-btn" onClick={minusAdultNum} disabled={(adultNum <= 1)}>
                -
              </button>
              <div className="w-btn">
                {adultNum}
              </div>
              <button className="add-minus-btn" onClick={addAdultNum} disabled={(adultNum >= 4)}>
                +
              </button>
              </div>
            </div>
            <div className="outer-div">
              유아
              <div className="container">
                <button className="add-minus-btn" onClick={minusBabyNum} disabled={(babyNum <= 0)}>
                  -
                </button>
                <div className="w-btn">
                  {babyNum}
                </div>
                <button className="add-minus-btn" onClick={addBabyNum}>
                  +
                </button>
              </div>
            </div>
              <div className="outer-div">
                <div>
                  반려동물
                </div>
                
                  <div className={!props.content["반려동물"]? "w-btn" : "w-btn div-blue"} onClick={withPet}>동반</div>
                  <div className={!props.content["반려동물"]? "w-btn div-blue" : "w-btn"} onClick={notPet}>비동반</div>
                

              </div>
            </div>
          )
          : null
        }
      </div>
    </div>
  )
};

export default ReservationInfo;