/* global kakao */
import React, { useEffect } from "react";
import "./style/Map.css";

import { useLocation } from "react-router-dom";

const Map = () => {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(location.state.lat, location.state.lon),
      level: 4,
    };
    let map = new window.kakao.maps.Map(container, options);

    var marker = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
      position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);
  }, []);


  return (
    <div>
      <div>아래쪽이 맵입니당</div>
      <div id="map"></div>
    </div>
  );
};

export default Map;
