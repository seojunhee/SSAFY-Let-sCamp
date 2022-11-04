import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import NavBar from "../Components/NavBar/NavBar";
import Items from "../Components/MainPage/Items";
import MyReserve from "../Components/MainPage/MyReserve";
import Header from "../Components/Header/Header";
import Main from "../Components/MainPage/Main";

const MainPage = () => {
  const [reservationData, SetReservation] = useState();
  const [items, SetItems] = useState();
  useEffect(() => {
    const url = LetsCamp.reservation.getReserve();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        SetReservation(response.data);
        console.log(response);
        switch (response.data[0].category) {
          case "일반야영장": {
            const url2 = LetsCamp.normal.getAll(response.data[0].id);
            axios
              .get(url2, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.accessToken}`,
                },
              })
              .then(function (response) {
                SetItems(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          }
          case "글램핑": {
            const url2 = LetsCamp.glamping.getAll(response.data[0].id);
            axios
              .get(url2, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.accessToken}`,
                },
              })
              .then(function (response) {
                SetItems(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          }
          case "카라반": {
            const url2 = LetsCamp.caraban.getAll(response.data[0].id);
            axios
              .get(url2, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.accessToken}`,
                },
              })
              .then(function (response) {
                SetItems(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          }
          case "자동차야영장": {
            const url2 = LetsCamp.carcamping.getAll(response.data[0].id);
            axios
              .get(url2, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.accessToken}`,
                },
              })
              .then(function (response) {
                SetItems(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          }
          default: {
            alert("에러 발생");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header pageName={"메인페이지"}></Header>
      {reservationData ? (
        <MyReserve reservationData={reservationData}></MyReserve>
      ) : (
        <div> </div>
      )}
      {items ? (
        <Items items={items} reservationData={reservationData}></Items>
      ) : (
        <div></div>
      )}
      <NavBar></NavBar>
    </div>
  );
};

export default MainPage;
