import React, { useState } from "react";
import "./style/Result.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import letscamp from "../api/LetsCamp.js";
import Header from "../Components/Header/Header.js";
import NavBar from "../Components/NavBar/NavBar.js";
const Result = () => {
  // endDate가 지나고 예약 리뷰가 없는 캠핑장만 리뷰를 남길 수 있게 만듦
  const navigate = useNavigate();
  let exp = 0;
  let url3;
  let url5;

  const [rateValue, setRateValue] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hoverRateValue, setHoverRateValue] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isHover, setIsHover] = useState(false);
  const [reviewContent, setReviewContent] = useState();
  const [rate, SetRate] = useState();

  const starArray = [0, 1, 2, 3, 4];

  const reReserve = () => {
    sessionStorage.setItem("reserveInfo", JSON.stringify("캠핑장 데이터"));
    navigate("/reserve");
  };

  const handleStarClick = (clickedIndex) => {
    SetRate(clickedIndex + 1);
    const prevRateValue = [...rateValue];
    const isClickedStarActive = prevRateValue[clickedIndex];
    const isNextStarActive = prevRateValue[clickedIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, clickedIndex + 1);
      setIsHover(false);
      setHoverRateValue([false, false, false, false, false]);
      setRateValue(prevRateValue);
      return;
    }
    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, clickedIndex + 1);
      setIsHover(false);
      setHoverRateValue([false, false, false, false, false]);
      setRateValue(prevRateValue);
      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, clickedIndex + 1);
      setIsHover(false);
      setHoverRateValue([false, false, false, false, false]);
      setRateValue(prevRateValue);
      return;
    }
  };

  const handleStarMousehover = (hoveredIndex) => {
    const prevRateValue = [...hoverRateValue];
    const isClickedStarActive = prevRateValue[hoveredIndex];
    const isNextStarActive = prevRateValue[hoveredIndex + 1];
    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, hoveredIndex + 1);
      setIsHover(false);
      setHoverRateValue(prevRateValue);
      return;
    }
    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, hoveredIndex + 1);
      setIsHover(true);
      setHoverRateValue(prevRateValue);
      return;
    }
    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, hoveredIndex + 1);
      setIsHover(true);
      setHoverRateValue(prevRateValue);
      return;
    }
  };

  const handleStarMouseout = () => {
    setIsHover(false);
    setHoverRateValue([false, false, false, false, false]);
  };

  const checkIsActive = (star) => {
    if (isHover) {
      if (hoverRateValue[star]) {
        return "activeStar";
      }
      return "inactiveStar";
    }
    if (rateValue[star]) {
      return "activeStar";
    }
    return "inactiveStar";
  };

  const reviewWrite = (e) => {
    setReviewContent(e.target.value);
  };
  // {
  //   "comment": "string",
  //   "id": Long,
  //   "rate": double
  // }
  const toReview = () => {
    const url = letscamp.review.write(sessionStorage.getItem("campingId"));
    axios
      .post(
        url,
        {
          comment: reviewContent,
          rate: rate,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.accessToken}`,
          },
        }
      )
      .then(function (response) {
        const url2 = letscamp.task.get(sessionStorage.getItem("reservationId"));
        axios
          .get(url2, {
            headers: {
              Authorization: `Bearer ${sessionStorage.accessToken}`,
            },
          })
          .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
              if (response.data[i].done === true) {
                exp = exp + 10;
              }
            }
            if (sessionStorage.getItem("category") === "일반야영장") {
              url3 = letscamp.normal.getAll(
                sessionStorage.getItem("reservationId")
              );
            } else if (sessionStorage.getItem("category") === "글램핑") {
              url3 = letscamp.glamping.getAll(
                sessionStorage.getItem("reservationId")
              );
            } else if (sessionStorage.getItem("category") === "카라반") {
              url3 = letscamp.caraban.getAll(
                sessionStorage.getItem("reservationId")
              );
            } else if (sessionStorage.getItem("category") === "자동차야영장") {
              url3 = letscamp.carcamping.getAll(
                sessionStorage.getItem("reservationId")
              );
            }
            axios
              .get(url3, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.accessToken}`,
                },
              })
              .then(function (response) {
                for (let i = 0; i < response.data.length; i++) {
                  if (response.data[i].check === true) {
                    if (response.data[i].level === 1) {
                      exp = exp + 4;
                    } else if (response.data[i].level === 2) {
                      exp = exp + 3;
                    } else if (response.data[i].level === 3) {
                      exp = exp + 2;
                    } else {
                      exp = exp + 1;
                    }
                  }
                }
                const url4 = letscamp.user.updateExp(exp);
                axios
                  .put(
                    url4,
                    {},
                    {
                      headers: {
                        Authorization: `Bearer ${sessionStorage.accessToken}`,
                      },
                    }
                  )
                  .then(function (response) {
                    if (sessionStorage.getItem("category") === "일반야영장") {
                      url5 = letscamp.normal.delete(
                        sessionStorage.getItem("reservationId")
                      );
                    } else if (
                      sessionStorage.getItem("category") === "글램핑"
                    ) {
                      url5 = letscamp.glamping.delete(
                        sessionStorage.getItem("reservationId")
                      );
                    } else if (
                      sessionStorage.getItem("category") === "카라반"
                    ) {
                      url5 = letscamp.caraban.delete(
                        sessionStorage.getItem("reservationId")
                      );
                    } else if (
                      sessionStorage.getItem("category") === "자동차야영장"
                    ) {
                      url5 = letscamp.carcamping.delete(
                        sessionStorage.getItem("reservationId")
                      );
                    }
                    axios
                      .delete(url5, {
                        headers: {
                          Authorization: `Bearer ${sessionStorage.accessToken}`,
                        },
                      })
                      .then(function (response) {
                        const url6 = letscamp.reservation.delete(
                          sessionStorage.getItem("reservationId")
                        );
                        axios
                          .delete(url6, {
                            headers: {
                              Authorization: `Bearer ${sessionStorage.accessToken}`,
                            },
                          })
                          .then(function (response) {
                            alert("경험치가 상승했습니다.");
                            navigate("/main");
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });

        //navigate("/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="result">
      <Header></Header>
      <div className="result-myreserve">
        <div className="result-myreserve-toptext">
          리뷰를 남기고 경험치를 획득하세요!
        </div>
        <div className="result-myreserve-reservebox">
          <div className="result-myreserve-title-box">
            <div className="result-myreserve-title">당신이 다녀온 캠핑장은</div>
          </div>
          <img
            src={sessionStorage.getItem("thumb")}
            alt="예약한 캠핑장 사진"
            className="result-myreserve-img"
          ></img>
          <div className="result-myreserve-title">
            {sessionStorage.getItem("name")}
          </div>
        </div>
        <div className="result-reviewbox">
          <div className="result-text">캠핑장은 마음에 들었나요?</div>
          <br></br>
          <div>별점과 리뷰 남기기</div>
          <div className="star-box">
            {starArray.map((star, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarMousehover(star)}
                  onMouseLeave={() => handleStarMouseout()}
                >
                  {rateValue[star] ? (
                    <div className="star">⭐</div>
                  ) : (
                    <div className="star-none">☆</div>
                  )}
                </div>
              );
            })}
          </div>
          <textarea
            className="width-90 review-content"
            placeholder="리뷰를 남겨주세요"
            onChange={reviewWrite}
          ></textarea>
          <div className="result-buttonbox">
            <button className="result-rereservebtn" onClick={reReserve}>
              다시 예약하기
            </button>
            <button
              className="result-endbtn"
              onClick={toReview}
              disabled={rateValue[0] && reviewContent ? false : true}
            >
              캠핑 완료!
            </button>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Result;
