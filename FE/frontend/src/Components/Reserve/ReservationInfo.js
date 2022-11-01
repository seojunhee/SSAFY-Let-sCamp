import React from "react";

import "./style/ReservationInfo.css"

const ReservationInfo = (props) => {


  return (
    <div className="grid outer-div">
      <div className="item col-8">
        <div className="text-left text-h3">
          {props.title}
        </div>
        <div className="text-left">
          {props.content}
        </div>
      </div>
      <div className="item col-2 update-btn">
        <a href=".">수정</a>
      </div>
    </div>
  )
};

export default ReservationInfo;