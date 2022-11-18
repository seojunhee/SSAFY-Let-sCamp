import React, { useEffect, useState } from "react";
import Todos from "./Todos.js";
import "./style/MyReserve.css";

const MyReserve = ({ reservationData, campingData }) => {
  const [day, SetDay] = useState();

  console.log(reservationData);

  useEffect(() => {
    const date = new Date();
    const month =
      reservationData[0].startDate.substring(5, 7) - (date.getMonth() + 1);
    const lastday = month * 30;
    SetDay(
      parseInt(lastday) +
        parseInt(reservationData[0].startDate.substring(8, 10)) -
        parseInt(date.getDate())
    );
  }, []);

  return (
    <div>
      {reservationData ? (
        <div>
          <div className="mainpage-myreserve">
            <div className="mainpage-myreserve-reservebox">
              <div className="mainpage-myreserve-title">
                당신이 예약한 캠핑장은
              </div>
              <div className="mainpage-myreserve-title">{campingData.name}</div>
              <img
                src={campingData.thumb}
                alt="예약한 캠핑장 사진"
                className="mainpage-myreserve-img"
              ></img>
              <div className="mainpage-myreserve-day">
                캠핑장 예약 날짜까지 {day}일 남았습니다.
              </div>
              <br></br>
            </div>
          </div>
          <div className="mainpage-myreserve-todo">
            <Todos reservationData={reservationData} day={day}></Todos>
          </div>
        </div>
      ) : (
        <h1>예약정보 없음</h1>
      )}
    </div>
  );
};

export default MyReserve;
