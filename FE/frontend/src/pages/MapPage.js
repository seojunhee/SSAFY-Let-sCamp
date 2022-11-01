import React from "react";
import Map from "../Components/Map/Map.js";
import Header from "../Components/Header/Header.js";
import NavBar from "../Components/NavBar/NavBar.js";

const MapPage = () => {
  return (
    <div>
      <Header pageName={"지도로 보기"}></Header>
      <Map></Map>
      <NavBar></NavBar>
    </div>
  );
};

export default MapPage;
