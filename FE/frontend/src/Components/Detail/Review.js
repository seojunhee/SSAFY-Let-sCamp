import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Review.css";

const Review = (id) => {
  const [reviewdata, SetReview] = useState();
  const [starPoint, setStarPoint] = useState();
  
  const urlStar = LetsCamp.review.rate(id.id)

  const Rate = (reviewData) => {
    return (
      <div className="detail-star">
        <div className={(reviewData.reviewData.rate >= 1) ? "" : "empty-star"}>⭐</div>
        <div className={(reviewData.reviewData.rate >= 2) ? "" : "empty-star"}>⭐</div>
        <div className={(reviewData.reviewData.rate >= 3) ? "" : "empty-star"}>⭐</div>
        <div className={(reviewData.reviewData.rate >= 4) ? "" : "empty-star"}>⭐</div>
        <div className={(reviewData.reviewData.rate >= 5) ? "" : "empty-star"}>⭐</div>
      </div>
    )
  };

  const Profile = (reviewdata) => {
    if (reviewdata.reviewdata.userExp < 500) {
      return (
        <div>
          <img
            src="/asset/profile/camlin.png"
            alt="캠린"
            className="detail-review-profile"
          ></img>
        </div>
      );
    } else if (
      reviewdata.reviewdata.userExp >= 500 &&
      reviewdata.reviewdata.userExp < 1500
    ) {
      return (
        <div>
          <img
            src="/asset/profile/camding.png"
            alt="캠딩"
          ></img>
        </div>
      );
    } else if (
      reviewdata.reviewdata.userExp >= 1500 &&
      reviewdata.reviewdata.userExp < 4000
    ) {
      return (
        <div>
          <img
            src="/asset/profile/camdeahak.png"
            alt="캠대학생"
          ></img>
        </div>
      );
    } else if (
      reviewdata.reviewdata.userExp >= 4000 &&
      reviewdata.reviewdata.userExp < 10000
    ) {
      return (
        <div>
          <img
            src="/asset/profile/camdeahakone.png"
            alt="캠대학원생"
          ></img>
        </div>
      );
    } else if (reviewdata.reviewdata.userExp > 10000) {
      return (
        <div>
          <img
            src="/asset/profile/cambaksa.png"
            alt="캠박사"
            className="detail-review-profile"
          ></img>
        </div>
      );
    }
  };

  const List = () => {
    return (
      <div>
        {reviewdata.map((reviewData, key) => (
          <div key={key}>
            <div className="detail-reviewbox">
              <div className="detail-box">
                <Profile reviewdata={reviewData}></Profile>
                <div className="detail-star-name">
                  <div className="detail-name-date">
                    <div className="detail-username">
                      {reviewData.userNickName}
                    </div>
                    <div className="detail-date">
                      {reviewData.date}
                    </div>
                  </div>
                  <Rate reviewData={reviewData}></Rate>
                </div>
              </div>
              <hr className="detail-contents-line"></hr>
              <div className="detail-review-content">
                {reviewData.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const url = LetsCamp.review.get(id.id);
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
    axios
      .get(urlStar, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        setStarPoint(response.data);
      });
  }, [id.id]);

  return (
    <div className="detail-review">
      <div className="p-y-1">사용자들의 한줄 평 ⭐({starPoint})</div>
      <hr></hr>
      
      {reviewdata ? <List></List> : <div>리뷰가 없습니다.</div>}
    </div>
  );
};

export default Review;
