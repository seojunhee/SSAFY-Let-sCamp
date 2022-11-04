import React, { useEffect, useState } from "react";
import "./style/UserVisited.css";
import { useNavigate } from "react-router-dom";

const UserVisited = (reviewdata) => {
  const navigate = useNavigate();

  console.log(reviewdata);

  return (
    <div className="uservisited">
      <div
        className="uservisited-box"
        onClick={() => {
          navigate("/detail");
        }}
      >
        <img
          src={reviewdata.reviewdata[0].campingThumb}
          alt="캠핑장사진"
          className="uservisited-thumb"
        />
        <div className="uservisited-campsitename">
          {reviewdata.reviewdata[0].campingName}
        </div>
        <div className="uservisited-content-box">
          <div className="uservisited-content">
            {reviewdata.reviewdata[0].rate}
          </div>
          <div className="uservisited-content">
            {reviewdata.reviewdata[0].comment}
          </div>
        </div>
      </div>
      <div
        className="uservisited-box"
        onClick={() => {
          navigate("/detail");
        }}
      >
        <img
          src={reviewdata.reviewdata[1].campingThumb}
          alt="캠핑장사진"
          className="uservisited-thumb"
        />
        <div className="uservisited-campsitename">
          {reviewdata.reviewdata[1].campingName}
        </div>
        <div className="uservisited-content-box">
          <div className="uservisited-content">
            {reviewdata.reviewdata[1].rate}
          </div>
          <div className="uservisited-content">
            {reviewdata.reviewdata[1].comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVisited;
