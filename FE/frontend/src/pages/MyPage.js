import React from "react";
import UserInfo from "../Components/MyPage/UserInfo";
import UserReserve from "../Components/MyPage/UserReserve";
import UserVisited from "../Components/MyPage/UserVisited";
import { useNavigate } from "react-router-dom";
import "./style/MyPage.css";

const Mypage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mypage">
      <div>
        <button onClick={goBack}>뒤로가기</button> 마이페이지
      </div>
      <hr />
      <UserInfo></UserInfo>
      <hr />
      <UserReserve></UserReserve>
      <hr />
      <UserVisited></UserVisited>
    </div>
  );
};

export default Mypage;
