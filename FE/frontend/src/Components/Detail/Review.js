import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Review.css";

const Review = (id) => {
  const [reviewdata, SetReview] = useState();

  const Rate = (reviewData) => {
    if (reviewData.reviewData.rate > 4) {
      return (
        <div className="detail-rate">
          ⭐⭐⭐⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (
      reviewData.reviewData.rate > 3 &&
      reviewData.reviewData.rate <= 4
    ) {
      return (
        <div className="detail-rate">
          ⭐⭐⭐⭐({reviewData.reviewData.rate})
        </div>
      );
    } else if (
      reviewData.reviewData.rate > 2 &&
      reviewData.reviewData.rate <= 3
    ) {
      return (
        <div className="detail-rate">⭐⭐⭐({reviewData.reviewData.rate})</div>
      );
    } else if (
      reviewData.reviewData.rate > 1 &&
      reviewData.reviewData.rate <= 2
    ) {
      return (
        <div className="detail-rate">⭐⭐({reviewData.reviewData.rate})</div>
      );
    } else if (reviewData.reviewData.rate > 0) {
      return (
        <div className="detail-rate">⭐({reviewData.reviewData.rate})</div>
      );
    } else {
      return <div>별점 정보가 없습니다.</div>;
    }
  };

  const Profile = (reviewdata) => {
    if (reviewdata.reviewdata.userExp < 500) {
      return (
        <div className="detail-review-imgbox">
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
        <div className="detail-review-imgbox">
          <img
            src="/asset/profile/camding.png"
            alt="캠딩"
            className="detail-review-profile"
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
            className="detail-review-profile"
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
            className="detail-review-profile"
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
                <div className="detail-box-nickrate">
                  <div>{reviewData.userNickName}</div>
                  <Rate reviewData={reviewData}></Rate>
                </div>
              </div>
              <hr className="detail-contents-line"></hr>
              <div className="detail-review-content">
                {reviewData.comment}
                {reviewData.date}
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
  }, [id.id]);

  return (
    <div className="detail-review detail-reviewbox section-card">
      <div>사용자들의 한줄 평</div>
      <hr></hr>
      
      {reviewdata ? <List></List> : <div className="height-30">리뷰없음 </div>}
    </div>
  );
};

export default Review;
