import React from "react";
import Map from "../Components/Map/Map.js";
import Header from "../Components/Header/Header.js";

const MapPage = () => {
  return (
    <div>
      <Header pageName={"지도로 보기"}></Header>
      <Map></Map>
    </div>
  );
};

export default MapPage;
