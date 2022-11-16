import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (campSiteList) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <div className="carousel-text">오늘의 랜덤 추천 캠핑장은...?</div>
      <Slider {...settings}>
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
              <div className="carousel-name">{campSiteList.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
