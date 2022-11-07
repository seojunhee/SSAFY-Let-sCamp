import React, { useEffect, useState } from "react";
import "./style/MyReserve.css";

const MyReserve = ({ reservationData, campingData }) => {
  const [day, SetDay] = useState("");

  useEffect(() => {
    const date = new Date();
    SetDay(reservationData[0].endDate.substring(8, 10) - date.getDate());
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
            <div> 예약 날짜까지 {day}일 남았습니다.</div>
            <br></br>
            <div>캠핑가기 전에 할 일</div>
            <ul className="mainpage-myreserve-todos">
              <li className="mainpage-myreserve-todo">준비물 챙기기</li>
              <li className="mainpage-myreserve-todo">텐트 확인하기</li>
            </ul>
          </div>
        ) : (
          <h1>예약정보 없음</h1>
        )}
      </div>
    </div>
  );
};

export default MyReserve;
