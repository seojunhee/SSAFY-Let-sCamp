import React, { useState } from "react";
import "./style/UserVisited.css";
import { useNavigate } from "react-router-dom";

const UserVisited = (reviewdata) => {
  const navigate = useNavigate();
  const [reviewData, SetReview] = useState(reviewdata);

  const Rate = (reviewData) => {
    if (reviewData.reviewData.rate > 4) {
      return (
        <div className="uservisited-rate">
          ⭐⭐⭐⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (
      reviewData.reviewData.rate > 3 &&
      reviewData.reviewData.rate <= 4
    ) {
      return (
        <div className="uservisited-rate">
          ⭐⭐⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (
      reviewData.reviewData.rate > 2 &&
      reviewData.reviewData.rate <= 3
    ) {
      return (
        <div className="uservisited-rate">
          ⭐⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (
      reviewData.reviewData.rate > 1 &&
      reviewData.reviewData.rate <= 2
    ) {
      return (
        <div className="uservisited-rate">
          ⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (reviewData.reviewData.rate > 0) {
      return (
        <div className="uservisited-rate">⭐({reviewData.reviewData.rate})</div>
      );
    } else {
      return <div>별점 정보가 없습니다.</div>;
    }
  };

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
            <div className="uservisited-contents">
              <div className="uservisited-campsitename">
                {reviewData.campingName}
              </div>
              <Rate reviewData={reviewData}></Rate>
              <hr className="uservisited-contents-line"></hr>
              <div className="uservisited-content-box">
                <div className="uservisited-comment">{reviewData.comment}</div>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="uservisited">
      <div className="uservisited-text">나의 한줄 평</div>
      <hr></hr>
      {reviewData ? (
        <List></List>
      ) : (
        <div className="">내가 남긴 한줄평이 없습니다.</div>
      )}
    </div>
  );
};

export default UserVisited;
