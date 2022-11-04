import React from "react";

const ReserveBtn = (props) => {

  const btnDisable = (!props.dateContent || !props.peopleContent)

  return (
    <div className="width-100">
      <button className={ btnDisable ? "reserve-button-disable" : "reserveButton"} disabled={btnDisable} onClick={() => {console.log("예약")}}>
        예약하기
      </button>
    </div>
  )
};

export default ReserveBtn;