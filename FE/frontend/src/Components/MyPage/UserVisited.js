import React from "react";
import "./style/UserVisited.css";

const UserVisited = () => {
  return (
    <div className="uservisited">
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
