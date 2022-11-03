import React, { useEffect, useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";

const Review = () => {
  const [reviewdata, SetReview] = useState([]);

  useEffect(() => {
    const id = "1";
    const url = LetsCamp.review.get(id);
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
  }, []);

  return <div>{reviewdata ? <div></div> : <div>리뷰없음 </div>}</div>;
};

export default Review;
