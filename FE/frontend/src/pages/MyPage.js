import React, { useState, useEffect } from "react";
import UserInfo from "../Components/MyPage/UserInfo";
import UserVisited from "../Components/MyPage/UserVisited";
import "./style/MyPage.css";
import Header from "../Components/Header/Header.js";
import NavBar from "../Components/NavBar/NavBar.js";
import LetsCamp from "../api/LetsCamp";
import axios from "axios";

const Mypage = () => {
  const [reviewdata, SetReview] = useState();
  const [userData, SetUser] = useState();

  useEffect(() => {
    const url2 = LetsCamp.user.info();
    axios
      .get(url2, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        SetUser(response.data);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });

    const url = LetsCamp.review.getUserReview();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log("성공");
        console.log(response.data);
        SetReview(response.data);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  }, []);

  return (
    <div className="mypage">
      <Header pageName={"마이페이지"}></Header>
      {userData ? <UserInfo userData={userData}></UserInfo> : <div></div>}
      <hr />
      {reviewdata ? (
        <UserVisited reviewdata={reviewdata}></UserVisited>
      ) : (
        <div></div>
      )}
      <NavBar></NavBar>
    </div>
  );
};

export default Mypage;
