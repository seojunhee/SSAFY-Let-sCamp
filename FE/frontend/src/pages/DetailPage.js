import React from "react";
import Header from "../Components/Header/Header";
import Contents from "../Components/Detail/Contents";
import DetailImg from "../Components/Detail/DetailImg";
import Review from "../Components/Detail/Review";

const Detail = () => {
  return (
    <div>
      <Header></Header>
      <hr />
      <div>솔내음캠핑장</div>
      <DetailImg></DetailImg>
      <hr />
      <Contents></Contents>
      <hr />
      <Review></Review>
    </div>
  );
};

export default Detail;
