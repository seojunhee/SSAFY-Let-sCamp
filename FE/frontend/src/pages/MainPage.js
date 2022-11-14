import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import NavBar from "../Components/NavBar/NavBar";
import Items from "../Components/MainPage/Items";
import MyReserve from "../Components/MainPage/MyReserve";
import Header from "../Components/Header/Header";
import Main from "../Components/MainPage/Main";
import TodayRecomm from "../Components/MainPage/TodayRecomm.js";

const MainPage = () => {
  const [reservationData, SetReservation] = useState();
  const [items, SetItems] = useState();
  const [campingData, SetCamping] = useState();
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
        const getOne = LetsCamp.camping.getOne(response.data[0].campingId);
        axios
          .get(getOne, {
            headers: {
              Authorization: `Bearer ${sessionStorage.accessToken}`,
            },
          })
          .then(function (response) {
            SetCamping(response.data.name);
          })
          .catch(function (error) {
            console.log(error);
          });

        switch (response.data[0].category) {
          case "일반야영장": {
            const getItem = LetsCamp.normal.getAll(response.data[0].id);
            axios
              .get(getItem, {
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
            const getItem = LetsCamp.glamping.getAll(response.data[0].id);
            axios
              .get(getItem, {
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
            const getItem = LetsCamp.caraban.getAll(response.data[0].id);
            axios
              .get(getItem, {
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
            const getItem = LetsCamp.carcamping.getAll(response.data[0].id);
            axios
              .get(getItem, {
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
      {reservationData && campingData ? (
        <MyReserve
          reservationData={reservationData}
          campingData={campingData}
        ></MyReserve>
      ) : (
        <TodayRecomm></TodayRecomm>
      )}
      {items ? (
        <Items items={items} reservationData={reservationData}></Items>
      ) : (
        <Main></Main>
      )}
      <NavBar></NavBar>
    </div>
  );
};

export default MainPage;
