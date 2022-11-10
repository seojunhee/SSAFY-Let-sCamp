import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Carousel.css";

const Carousel = (campSiteList) => {
  const navigate = useNavigate();

  return (
    <div className="carousel">
      {campSiteList.campSiteList.map((campSiteList, key) => (
        <div key={key} className="carousel-box">
          <div
            className="carousel-box"
            onClick={() => {
              navigate("/detail", {
                state: { campingId: campSiteList.id },
              });
            }}
          >
            <img
              src={campSiteList.thumb}
              alt="캠핑장이미지"
              className="carousel-img"
            />
            <div className="carousel-text">오늘의 랜덤 추천 캠핑장은...?</div>
            <div className="carousel-name">{campSiteList.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
