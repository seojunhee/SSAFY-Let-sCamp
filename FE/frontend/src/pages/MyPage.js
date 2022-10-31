import React from "react";
import UserInfo from "../Components/MyPage/UserInfo";
import UserReserve from "../Components/MyPage/UserReserve";
import UserVisited from "../Components/MyPage/UserVisited";
import "./style/MyPage.css";
import Header from "../Components/Header/Header.js";
import NavBar from "../Components/NavBar/NavBar.js";

const Mypage = () => {
  return (
    <div className="mypage">
      <Header pageName={"마이페이지"}></Header>
      <UserInfo></UserInfo>
      <hr />
      <UserReserve></UserReserve>
      <hr />
      <UserVisited></UserVisited>
      <NavBar></NavBar>
    </div>
  );
};

export default Mypage;
