import React from "react";
import "./style/Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>같이 캠핑을 떠나볼까요?</div>
      <button>예약하기</button>
      <button
        onClick={() => {
          navigate("/question");
        }}
      >
        캠핑장 추천받기
      </button>
    </div>
  );
};

export default Main;
