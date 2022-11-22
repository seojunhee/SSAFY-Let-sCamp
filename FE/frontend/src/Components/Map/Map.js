/* global kakao */
import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";


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
        level={4}
      >
        <MapMarker style={{backgroundColor : "red"}} position={{lat:location.state.lat, lng:location.state.lon}} onClick={toggleExplain}>
          {!hiddenLabel && <div style={{color:"#000"}} className="map-label">{location.state.name}</div>}
        </MapMarker>
        {/* <CustomOverlayMap
          position={{
            lat: location.state.lat,
            lng: location.state.lon,
          }}
        >
          이렇게 하면 어떻게 표시 되는 거지?
        </CustomOverlayMap> */}

      </Map>

    </div>
  );
};

export default KakaoMap;
