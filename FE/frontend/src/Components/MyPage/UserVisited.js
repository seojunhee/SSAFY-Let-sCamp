import React, { useEffect, useState } from "react";
import "./style/UserVisited.css";
import { useNavigate } from "react-router-dom";

const UserVisited = (reviewdata) => {
  const navigate = useNavigate();
  const [reviewData, SetReview] = useState(reviewdata);

  const List = () => {
    return (
      <div>
        {reviewData.reviewdata.map((reviewData, key) => (
          <div
            className="uservisited-box"
            key={reviewData.id}
            onClick={() => {
              navigate("/detail", {
                state: { campingId: reviewData.campingId },
              });
            }}
          >
            <img
              src={reviewData.campingThumb}
              alt="캠핑장사진"
              className="uservisited-thumb"
            />
            <div className="uservisited-campsitename">
              {reviewData.campingName}
            </div>
            <div className="uservisited-content-box">
              <div className="uservisited-content">{reviewData.rate}</div>
              <div className="uservisited-content">{reviewData.comment}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="uservisited">
      {reviewData ? <List></List> : <div></div>}
    </div>
  );
};

export default UserVisited;
