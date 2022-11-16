import React, { useEffect, useState } from "react";
import Todos from "./Todos.js";
import "./style/MyReserve.css";

const MyReserve = ({ reservationData, campingData }) => {
  const [day, SetDay] = useState();
  useEffect(() => {
    const date = new Date();
    SetDay(reservationData[0].startDate.substring(8, 10) - date.getDate());
  }, []);

  return (
    <div className="mainpage-myreserve">
      <div>
        {reservationData ? (
          <div className="mainpage-myreserve-reservebox">
            <div className="mainpage-myreserve-title">
              당신이 예약한 캠핑장은
            </div>
            <div className="mainpage-myreserve-title">{campingData}</div>
            <img
              src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"
              alt="예약한 캠핑장 사진"
              className="mainpage-myreserve-img"
            ></img>
            <div className="mainpage-myreserve-day">
              캠핑장 예약 날짜까지 {day}일 남았습니다.
            </div>
            <br></br>
            <Todos reservationData={reservationData} day={day}></Todos>
          </div>
        ) : (
          <h1>예약정보 없음</h1>
        )}
      </div>
    </div>
  );
};

export default MyReserve;
