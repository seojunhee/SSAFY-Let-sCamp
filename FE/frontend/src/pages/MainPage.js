import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import NavBar from "../Components/NavBar/NavBar";
import Items from "../Components/MainPage/Items";
import MyReserve from "../Components/MainPage/MyReserve";
import Header from "../Components/Header/MainHeader";
import Main from "../Components/MainPage/Main";
import TodayRecomm from "../Components/MainPage/TodayRecomm.js";
import GoItems from "../Components/MainPage/GoItems";
import GoRecycle from "../Components/MainPage/GoRecycle";
import "./style/MainPage.css";

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
        sessionStorage.setItem("campingId", response.data[0].campingId);
        sessionStorage.setItem("reservationId", response.data[0].id);
        sessionStorage.setItem("category", response.data[0].category);
        const getOne = LetsCamp.camping.getOne(response.data[0].campingId);
        axios
          .get(getOne, {
            headers: {
              Authorization: `Bearer ${sessionStorage.accessToken}`,
            },
          })
          .then(function (response) {
            SetCamping(response.data);
            console.log(response.data.name);
            console.log(response.data.thumb);
            sessionStorage.setItem("name", response.data.name);
            sessionStorage.setItem("thumb", response.data.thumb);
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
    <div className="mainpage">
      <Header></Header>
      {reservationData && campingData ? (
        <MyReserve
          reservationData={reservationData}
          campingData={campingData}
        ></MyReserve>
      ) : (
        <TodayRecomm></TodayRecomm>
      )}
      {reservationData && campingData ? <GoItems></GoItems> : <Main></Main>}
      {reservationData && campingData ? <GoRecycle></GoRecycle> : null}
      <NavBar></NavBar>
    </div>
  );
};

export default MainPage;
