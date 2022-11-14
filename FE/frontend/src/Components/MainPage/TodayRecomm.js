import axios from "axios";
import React, { useEffect, useState } from "react";
import LetsCamp from "../../api/LetsCamp";
import Carousel from "./Carousel.js";
import "./style/TodayRecomm.css";

const TodayRecomm = () => {
  const [campSiteList, SetList] = useState();

  useEffect(() => {
    const url = LetsCamp.camping.getRandom();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        SetList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainpage-todayrecomm">
      {campSiteList ? (
        <Carousel campSiteList={campSiteList}></Carousel>
      ) : (
        <div></div>
      )}
      <button className="mainpage-todayrecomm-btn">이전</button>
      <button className="mainpage-todayrecomm-btn">다음</button>
    </div>
  );
};

export default TodayRecomm;
