import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import NavBar from "../Components/NavBar/NavBar";
import Items from "../Components/MainPage/Items";
import MyReserve from "../Components/MainPage/MyReserve";
import Header from "../Components/Header/Header";

const MainPage = () => {
  const [reservationData, SetReservation] = useState();
  const [items, SetItems] = useState();
  useEffect(() => {
    const url = LetsCamp.reservation.getReserve();
    console.log(url);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log("성공");
        SetReservation(response.data);
        const url2 = LetsCamp.glamping.getAll(response.data[0].id);
        axios
          .get(url2, {
            headers: {
              Authorization: `Bearer ${sessionStorage.accessToken}`,
            },
          })
          .then(function (response) {
            console.log("2번째 성공");
            SetItems(response.data);
          })
          .catch(function (error) {
            console.log("실패");
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header pageName={"메인페이지"}></Header>
      <MyReserve reservationData={reservationData}></MyReserve>
      <Items items={items}></Items>
      <NavBar></NavBar>
    </div>
  );
};

export default MainPage;
