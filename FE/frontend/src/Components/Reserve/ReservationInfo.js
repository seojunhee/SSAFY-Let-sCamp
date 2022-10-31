import React from "react";

const ReservationInfo = (props) => {


  return (
    <div>
      <div>
        {props.title}
      </div>
      <div>
        {props.content}
      </div>
      <a href=".">수정</a>
    </div>
  )
};

export default ReservationInfo;