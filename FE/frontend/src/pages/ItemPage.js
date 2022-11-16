import React, { useState, useEffect } from "react";
import "./style/ItemPage.css";
import axios from "axios";
import LetsCamp from "../api/LetsCamp";
import Items from "../Components/Items/Items.js";

const ItemPage = () => {
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
                console.log(response);
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

  return <div>{items ? <Items item={items}></Items> : null}</div>;
};

export default ItemPage;
