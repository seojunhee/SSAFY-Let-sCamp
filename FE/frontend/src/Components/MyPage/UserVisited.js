import React, { useEffect, useState } from "react";
import "./style/UserVisited.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";

const UserVisited = () => {
  const navigate = useNavigate();
  const [reviewdata, SetReview] = useState();

  useEffect(() => {
    const url = LetsCamp.review.getUserReview();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log("성공");
        console.log(response);
        SetReview(response.data);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  }, {});
  return (
    <div className="uservisited">
      <div
        className="uservisited-box"
        onClick={() => {
          navigate("/detail");
        }}
      >
        <img src="/asset/campingcar.png" alt="캠핑장사진" />
        <div className="">캠핑장 정보</div>
        <div className="uservisited-box-">
          <div>내가 준 별점</div>
          <div>내가 준 댓글</div>
        </div>
      </div>
      <div className="uservisited-box">
        <img src="/asset/campingcar.png" alt="캠핑장사진" />
        <div className="">캠핑장 정보</div>
        <div className="uservisited-box-">
          <div>내가 준 별점</div>
          <div>내가 준 댓글</div>
        </div>
      </div>
      <div className="uservisited-box">
        <img src="/asset/campingcar.png" alt="캠핑장사진" />
        <div className="">캠핑장 정보</div>
        <div className="uservisited-box-">
          <div>내가 준 별점</div>
          <div>내가 준 댓글</div>
        </div>
      </div>
    </div>
  );
};

export default UserVisited;
