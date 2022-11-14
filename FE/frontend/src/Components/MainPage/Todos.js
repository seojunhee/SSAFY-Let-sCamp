import React from "react";
import Caraban from "./scripts/Caraban.js";
import CarCamping from "./scripts/CarCamping.js";
import Glamping from "./scripts/Glamping.js";
import Nomal from "./scripts/Nomal.js";
import "./style/Todos.css";

const Todos = (reservationData) => {
  console.log(reservationData.reservationData[0].id);
  const Todo = () => {
    if (reservationData.reservationData[0].category === "일반야영장") {
      return (
        <div>
          <Nomal
            day={reservationData.day}
            reservationId={reservationData.reservationData[0].id}
          ></Nomal>
        </div>
      );
    } else if (reservationData.reservationData[0].category === "글램핑") {
      return (
        <div>
          <Glamping day={reservationData.day}></Glamping>
        </div>
      );
    } else if (reservationData.reservationData[0].category === "카라반") {
      return (
        <div>
          <Caraban day={reservationData.day}></Caraban>
        </div>
      );
    } else if (reservationData.reservationData[0].category === "자동차야영장") {
      return (
        <div>
          <CarCamping day={reservationData.day}></CarCamping>
        </div>
      );
    }
  };

  return (
    <div>
      <Todo></Todo>
    </div>
  );
};

export default Todos;
