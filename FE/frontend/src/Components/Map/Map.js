/* global kakao */
import React, { useEffect } from "react";
import "./style/Map.css";

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.2714369, 126.9609528),
      level: 1,
    };
    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);
  return (
    <div>
      <div>아래쪽이 맵입니당</div>
      <div id="map"></div>
    </div>
  );
};

export default Map;
