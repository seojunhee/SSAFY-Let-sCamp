import React, { useState } from "react";
import "./style/Result.css";
import { useNavigate } from "react-router-dom";

const Result = () => {
  // endDate가 지나고 예약 리뷰가 없는 캠핑장만 리뷰를 남길 수 있게 만듦
  const navigate = useNavigate();

  const [rateValue, setRateValue] = useState([false, false, false, false, false])
  const [hoverRateValue, setHoverRateValue] = useState([false, false, false, false, false])
  const [isHover, setIsHover] = useState(false)
  const [reviewContent, setReviewContent] = useState("")

  const starArray = [0, 1, 2, 3, 4];

  const reReserve = () => {
    sessionStorage.setItem("reserveInfo", JSON.stringify("캠핑장 데이터"))
    navigate('/reserve')
  }

  const handleStarClick = (clickedIndex) => {
    console.log(clickedIndex + 1)
    const prevRateValue = [...rateValue];
    const isClickedStarActive = prevRateValue[clickedIndex];
    const isNextStarActive = prevRateValue[clickedIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, clickedIndex + 1);
      
      setIsHover(false)
      setHoverRateValue([false, false, false, false, false])
      setRateValue(prevRateValue)
      return;
    }
    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, clickedIndex + 1);

      setIsHover(false)
      setHoverRateValue([false, false, false, false, false])
      setRateValue(prevRateValue)

      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, clickedIndex + 1);

      setIsHover(false)
      setHoverRateValue([false, false, false, false, false])
      setRateValue(prevRateValue)

      return;
    }
  }

  const handleStarMousehover = (hoveredIndex) => {
  
    const prevRateValue = [...hoverRateValue];
    const isClickedStarActive = prevRateValue[hoveredIndex];
    const isNextStarActive = prevRateValue[hoveredIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, hoveredIndex + 1);

      setIsHover(false)
      setHoverRateValue(prevRateValue)

      return;
    }

    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, hoveredIndex + 1);


      setIsHover(true)
      setHoverRateValue(prevRateValue)

      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, hoveredIndex + 1);

      setIsHover(true)
      setHoverRateValue(prevRateValue)

      return;
    }
  };

  const handleStarMouseout = () => {

    setIsHover(false)
    setHoverRateValue([false, false, false, false, false])

  };

  const checkIsActive = (star) => {
    if (isHover) {
      if (hoverRateValue[star]) {
        return 'activeStar';
      }

      return 'inactiveStar';
    }

    if (rateValue[star]) {
      return 'activeStar';
    }

    return 'inactiveStar';
  };

  const reviewWrite = (e) => {
    console.log(e.target.value)
    setReviewContent(e.target.value)
  }

  const toReview = () => {
    console.log("리뷰 작성")
  }

  

  return (
    <div className="mainpage-main">
      <div className="mainpage-myreserve">
      <div>
        <div className="mainpage-myreserve-reservebox">
          <div className="mainpage-myreserve-title">
            당신이 예약한 캠핑장은
          </div>
          <div className="mainpage-myreserve-title">캠핑장 이름</div>
          <img
            src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"
            alt="예약한 캠핑장 사진"
            className="mainpage-myreserve-img"
          ></img>
          <div>이전에 갔던 캠핑장은 마음에 들었나요?</div>
          <br></br>
          <div className="container">
            {starArray.map((star, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarMousehover(star)}
                  onMouseLeave={() => handleStarMouseout()}
                >
                {rateValue[star]?"★": "☆"}
                </div>
              );})}
          </div>
          <textarea className="width-90" placeholder="리뷰를 남겨주세요" onChange={reviewWrite}>

          </textarea>
        </div>
      </div>
    </div>
      <div>
        <button onClick={ reReserve }>다시 예약하기</button>
        <button onClick={ toReview } disabled={rateValue[0]? false : true}>캠핑 완료!</button>
      </div>
    </div>
  );
};

export default Result;
