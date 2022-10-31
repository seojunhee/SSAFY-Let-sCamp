import React from "react";
import UserInfo from "../Components/MyPage/UserInfo";
import UserReserve from "../Components/MyPage/UserReserve";
import UserVisited from "../Components/MyPage/UserVisited";
import { useSetRecoilState } from "recoil";
import { pageNameState } from "../Store/state";
import "./style/MyPage.css";
import Header from "../Components/Header/Header.js";

const Mypage = () => {
  const setPageName = useSetRecoilState(pageNameState);
  setPageName("마이페이지");

  return (
    <div className="mypage">
      <Header pageName={"마이페이지"}></Header>
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
