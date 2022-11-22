import React, { useState, useEffect } from "react";
import "./style/ItemPage.css";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import Items from "../Components/Items/Items.js";
import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar.js";
import { useNavigate } from "react-router-dom";

const ItemPage = () => {
  const [reservationData, SetReservation] = useState();
  const [items, SetItems] = useState();
  const [campingData, SetCamping] = useState();
  const navigate = useNavigate();

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
            SetCamping(response.data);
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
                console.log(response);
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
                console.log(response);
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
                console.log(response);
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
    <div className="itempage">
      <Header pageName={"준비물페이지"}></Header>
      {items ? (
        <Items item={items} category={reservationData[0].category}></Items>
      ) : null}
      <div>
        <button
          onClick={() => {
            navigate("/main");
          }}
          className="itempage-homebtn"
        >
          메인으로 돌아가기
        </button>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default ItemPage;
