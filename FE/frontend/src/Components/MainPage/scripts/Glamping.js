import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LetsCamp from "../../../api/LetsCamp.js";
import "./style/Glamping.css";
import { useNavigate } from "react-router-dom";

const Glamping = (day) => {
  const navigate = useNavigate();
  const [time, SetTime] = useState();
  const [todoState, SetTodo] = useState(1);
  const [checkState, SetCheck] = useState();

  const sliderRef = useRef();

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
    console.log(index);
  };

  const state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
  };

  /*
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      state.oldSlide = current;
      state.activeSlide = next;
    },
    afterChange: (current) => (state.activeSlide2 = current),
  };

  */

  useEffect(() => {
    const time = new Date().getHours();
    SetTime(time);
    const url = LetsCamp.task.get(day.reservationId);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        SetCheck(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const todoCheck = (check) => {
    const url = LetsCamp.task.check(
      check.reservationId,
      check.level,
      check.sublevel
    );
    const findIndex = checkState.findIndex(
      (data) => data.level === check.level && data.sublevel === check.sublevel
    );
    let copyArray = [...checkState];
    if (findIndex !== -1) {
      copyArray[findIndex] = {
        ...copyArray[findIndex],
        done: !check.done,
      };
    }
    SetCheck(copyArray);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
        handleOnClick(state.activeSlide);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const TodoByLevel = () => {
    // 시작일 - 현재날짜 > 1이면
    if (todoState === 1) {
      return (
        <div>
          {checkState ? (
            <div className="main-todobox">
              <div className="main-todobox-level">미리 준비할 것</div>
              <hr></hr>
              <div
                className="main-todo-glamping"
                onClick={() => {
                  todoCheck(checkState[0]);
                }}
              >
                <div className="main-todo-glamping-text">
                  자신이 예약한 캠핑장의 유형이 어떠한 유형인지 체크하고 필요한
                  용품을 확인한다.
                </div>

                {checkState[0].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                )}
              </div>
              <hr></hr>
              <div
                className="main-todo-glamping"
                onClick={() => {
                  todoCheck(checkState[1]);
                }}
              >
                <div className="main-todo-glamping-text">
                  글램핑은 말 그대로 정말 모든 용품들이 구비가 되어 있다. 먹고
                  마실 것만 준비해서 가면 된다.
                </div>
                {checkState[1].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                )}
              </div>
              <hr></hr>
              <div
                className="main-todo-glamping"
                onClick={() => {
                  todoCheck(checkState[2]);
                }}
              >
                <div className="main-todo-glamping-text">
                  예약한 캠핑장 정보를 레츠캠프를 이용하여 확인하고 해당
                  캠핑장에 없어서 미리 준비해야할 용품을 따로 준비한다.
                </div>
                {checkState[2].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-glamping-img"
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      );
    } else if (todoState === 2) {
      return (
        <div className="main-todobox">
          <div className="main-todobox-level"> 출발 직전 준비</div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[3]);
            }}
          >
            <div className="main-todo-glamping-text">
              세면도구, 비상약, 슬리퍼를 챙긴다.
            </div>
            {checkState[3].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[4]);
            }}
          >
            <div className="main-todo-glamping-text">
              깨끗한 캠핑장 이용을 위해 설거지통을 준비하고 캠핑을 하며 발생하는
              쓰레기 처리를 위해 쓰레기봉투를 준비한다.
            </div>
            {checkState[4].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[5]);
            }}
          >
            <div className="main-todo-glamping-text">
              감성충전을 위한 블루투스 스피커를 챙긴다.
            </div>
            {checkState[5].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
        </div>
      );
    } else if (todoState === 3) {
      return (
        <div className="main-todobox">
          <div className="main-todobox-level">캠핑 도착 이후</div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[6]);
            }}
          >
            <div className="main-todo-glamping-text">
              짐을 내리고 글램핑 사이트 내의 냉장고에 식품, 음료, 물, 술 등을
              배치한다.
            </div>
            {checkState[6].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[7]);
            }}
          >
            <div className="main-todo-glamping-text">
              캠핑장에서의 시간은 생각보다 빠르게 흐른다. 점심 식사를 하고 난
              후에 저녁식사를 준비할 마음가짐을 해야한다. 설거지를 하고 점심
              식사를 하며 발생한 쓰레기를 정리한다.
            </div>
            {checkState[7].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[8]);
            }}
          >
            <div className="main-todo-glamping-text">
              여유롭게 시간을 즐겨라. 블루투스 스피커는 옆 사이트의 사람들에게
              피해가지 않을 정도의 음량으로 즐기고 너무 시끄럽게 떠들지않는다면
              당신의 시간도 보장받는다.
            </div>
            {checkState[8].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[9]);
            }}
          >
            <div className="main-todo-glamping-text">
              음악과 분위기를 느끼며 저녁을 먹어라. 점심식사와 마찬가지로
              바로바로 정리하는 것이 좋다.{" "}
            </div>
            {checkState[9].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[10]);
            }}
          >
            <div className="main-todo-glamping-text">
              글램핑장의 대부분은 장작과 화로대를 제공한다. 사무실에 연락하여
              장작과 화로대를 구입하여 사용하자. 불멍을 하고 분위기와 음악에
              취하자.
            </div>
            {checkState[10].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[11]);
            }}
          >
            <div className="main-todo-glamping-text">
              저녁 시간에는 더욱 더 조심할 필요가 있다. 최대한 피해가 가지
              않도록 즐긴다.
            </div>
            {checkState[11].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
        </div>
      );
    } else if (todoState === 4) {
      return (
        <div className="main-todobox">
          <div className="main-todobox-level"> 캠핑 마무리</div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[12]);
            }}
          >
            <div className="main-todo-glamping-text">
              머무른 자리는 티도 안나게끔 깨끗하게 치운다.
            </div>
            {checkState[12].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              todoCheck(checkState[13]);
            }}
          >
            <div className="main-todo-glamping-text">
              캠핑장의 시간을 돌아보며 귀가한다.
            </div>
            {checkState[13].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-glamping"
            onClick={() => {
              if (window.confirm("댓글을 남기러 떠나보실래요?") === true) {
                todoCheck(checkState[14]);
                navigate("/review");
              }
            }}
          >
            <div className="main-todo-glamping-text">
              리뷰를 작성하고 경험치를 획득한다.
            </div>
            {checkState[14].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-glamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-glamping-img"
              />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="main-todos">
      <div className="levelbox">
        {todoState === 1 ? (
          <img
            src="/asset/level/level1.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(1);
            }}
          ></img>
        ) : (
          <img
            src="/asset/level/level1false.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(1);
            }}
          ></img>
        )}

        {todoState === 2 ? (
          <img
            src="/asset/level/level2.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(2);
            }}
          ></img>
        ) : (
          <img
            src="/asset/level/level2false.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(2);
            }}
          ></img>
        )}
        {todoState === 3 ? (
          <img
            src="/asset/level/level3.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(3);
            }}
          ></img>
        ) : (
          <img
            src="/asset/level/level3false.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(3);
            }}
          ></img>
        )}
        {todoState === 4 ? (
          <img
            src="/asset/level/level4.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(4);
            }}
          ></img>
        ) : (
          <img
            src="/asset/level/level4false.png"
            alt=""
            className="levelimg"
            onClick={() => {
              SetTodo(4);
            }}
          ></img>
        )}
      </div>
      <TodoByLevel></TodoByLevel>
    </div>
  );
};

export default Glamping;
