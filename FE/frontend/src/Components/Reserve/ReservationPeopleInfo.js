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
    if (adultNum <= 0) {
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
        <button className="w-btn" onClick={toggleIsActive}>
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
              <div className="w-btn" onClick={minusAdultNum}>
                -
              </div>
              <div className="w-btn">
                {adultNum}
              </div>
              <div className="w-btn" onClick={addAdultNum}>
                +
              </div>
              </div>
            </div>
            <div className="outer-div">
              유아
              <div className="container">
                <div className="w-btn" onClick={minusBabyNum}>
                  -
                </div>
                <div className="w-btn">
                  {babyNum}
                </div>
                <div className="w-btn" onClick={addBabyNum}>
                  +
                </div>
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