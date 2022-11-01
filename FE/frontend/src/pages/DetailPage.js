import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Contents from "../Components/Detail/Contents";
import DetailImg from "../Components/Detail/DetailImg";
import Review from "../Components/Detail/Review";
import NavBar from "../Components/NavBar/NavBar";
import axios from "axios";
import { useRecoilState } from "recoil";

const Detail = () => {
  useEffect(() => {
    const id = 1;
    const url = "http://k7b308.p.ssafy.io:8080/api/camping/" + id;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log("성공");
        console.log(response);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  });

  return (
    <div>
      <Header pageName={"상세 정보"}></Header>
      <DetailImg></DetailImg>
      <Contents></Contents>
      <hr />
      <Review></Review>
      <NavBar></NavBar>
    </div>
  );
};

export default Detail;
