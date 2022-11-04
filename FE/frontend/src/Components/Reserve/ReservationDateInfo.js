import React from "react";

import "./style/ReservationInfo.css"

import Calendar from 'react-calendar';
import moment from "moment";

const ReservationInfo = (props) => {

  const toggleIsActive = () => {
    props.setIsDateActive(!props.isDateActive)
  }

  const onChangeDate = (e) => {
    const nowMonth = e.map(date => {
      return moment(date).format('YYYY-MM-DD')
    })
    props.setContent(nowMonth)
  }

  return (
    <div>    
      <div className="container">
        <div className="">
          <div className="text-left text-h3">
            {props.title}
          </div>
          <div className="text-left">
            {
              !props.isDateActive
              ?props.content[0].split('-')[0] +"년 "+ props.content[0].split('-')[1] + "월 " + props.content[0].split('-')[2]+ "일" + " ~ " 
              +props.content[1].split('-')[0] +"년 "+ props.content[1].split('-')[1] + "월 " + props.content[1].split('-')[2]+ "일"
              : "날짜 입력 후 완료 버튼을 눌러 주세요."
            }
          </div>
        </div>
        <div className="update-btn" onClick={toggleIsActive}>
          {!!props.isDateActive ? "완료" : "수정"}
        </div>
        </div>
      <div>
      {
        !!props.isDateActive 
        ? (<Calendar
          className="width-100 height-auto"
          onChange={ onChangeDate }
          selectRange = { true }
          minDate = { new Date() }
          returnValue = {"range"}
        />)
        : null
      }
      
    </div>
    </div>
  )
};

export default ReservationInfo;