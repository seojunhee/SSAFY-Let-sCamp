/* global kakao */
import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { Map, MapMarker } from "react-kakao-maps-sdk";


// css
import "./style/Map.css";

const KakaoMap = () => {
  const location = useLocation();
  const [hiddenLabel, sethiddenLabel] = useState(false)

  const toggleExplain = () => {
    sethiddenLabel(!hiddenLabel)
  }


  return (
    <div className="height-100vh">
      <Map
        center={{lat:location.state.lat, lng:location.state.lon}}
        style={{ width: "100%", height: "80vh" }}
        draggable={true}
        level={3}
      >
        <MapMarker position={{lat:location.state.lat, lng:location.state.lon}} onClick={toggleExplain}>
          {!hiddenLabel && <div style={{color:"#000"}} className="map-label">{location.state.name}</div>}
        </MapMarker>

      </Map>

    </div>
  );
};

export default KakaoMap;
