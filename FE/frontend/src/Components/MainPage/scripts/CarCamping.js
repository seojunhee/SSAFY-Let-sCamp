import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LetsCamp from "../../../api/LetsCamp.js";
import "./style/CarCamping.css";
import { useNavigate } from "react-router-dom";

const CarCamping = (day) => {
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
                className="main-todo-carcamping"
                onClick={() => {
                  todoCheck(checkState[0]);
                }}
              >
                <div className="main-todo-carcamping-text">
                  자신이 예약한 캠핑장의 유형이 어떠한 유형인지 체크하고 필요한
                  용품을 확인
                </div>
                {checkState[0].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-carcamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-carcamping-img"
                  />
                )}
              </div>
              <hr></hr>
              <div
                className="main-todo-carcamping"
                onClick={() => {
                  todoCheck(checkState[1]);
                }}
              >
                <div className="main-todo-carcamping-text">
                  바로 구하기 힘든 차량용텐트, 차량용 평탄화 매트, 침구류,
                  테이블, 의자, 조명, 버너, 화로대, 릴선, 멀티탭 등의 캠핑용품을
                  먼저 준비
                </div>
                {checkState[1].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-carcamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-carcamping-img"
                  />
                )}
              </div>
              <hr></hr>
              <div
                className="main-todo-carcamping"
                onClick={() => {
                  todoCheck(checkState[2]);
                }}
              >
                <div className="main-todo-carcamping-text">
                  예약한 캠핑장 정보를 레츠캠프를 이용하여 확인하고 해당
                  캠핑장에 없어서 미리 준비해야할 용품을 따로 준비한다.
                </div>
                {checkState[2].done === true ? (
                  <img
                    src="/asset/icons/ok.png"
                    alt=""
                    className="main-todo-carcamping-img"
                  />
                ) : (
                  <img
                    src="/asset/icons/not.png"
                    alt=""
                    className="main-todo-carcamping-img"
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
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[3]);
            }}
          >
            <div className="main-todo-carcamping-text">
              미리 준비해둔 캠핑용품 다시 확인
            </div>
            {checkState[3].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[4]);
            }}
          >
            <div className="main-todo-carcamping-text">
              아이스박스를 준비했다면 아이스박스를 비워둔 채로 이동 → 이후 장을
              볼 때 얼음을 사서 같이 산 물, 음료, 술 등과 함께 넣어 다시
              이동하는 것이 편리
            </div>
            {checkState[4].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[5]);
            }}
          >
            <div className="main-todo-carcamping-text">
              침구류, 세면도구, 조리도구, 비상약, 슬리퍼를 챙긴다.
            </div>
            {checkState[5].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[6]);
            }}
          >
            <div className="main-todo-carcamping-text">
              깨끗한 캠핑장 이용을 위해 설거지통을 준비하고 캠핑을 하며 발생하는
              쓰레기 처리를 위해 쓰레기봉투를 준비한다.
            </div>
            {checkState[6].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[7]);
            }}
          >
            <div className="main-todo-carcamping-text">
              감성충전을 위한 블루투스 스피커를 챙긴다.
            </div>
            {checkState[7].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
        </div>
      );
    } else if (todoState === 3) {
      return (
        <div className="main-todobox">
          <div className="main-todobox-level">오토캠핑 도착 이후</div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[8]);
            }}
          >
            <div className="main-todo-carcamping-text">
              짐을 내리고 차량 2열을 내리고 차량용 평탄화 매트를 설치한다.
              차량용 텐트를 설치하는 것은 꽤나 오래 걸리고 꽤나 힘들다. 미리
              테이블과 의자를 설치해서 중간 중간 쉴 수 있도록 한다.
            </div>
            {checkState[8].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[9]);
            }}
          >
            <div className="main-todo-carcamping-text">
              일부 차량의 배터리는 차량의 문을 열었을 경우에도 닳는다.
              되도록이면 문을 닫아야 한다.
            </div>
            {checkState[9].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[10]);
            }}
          >
            <div className="main-todo-carcamping-text">
              점심 식사를 위한 세팅을 한다. 부탄가스, 버너, 그릴 등을 설치하고
              점심식사를 진행한다.
            </div>
            {checkState[10].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[11]);
            }}
          >
            <div className="main-todo-carcamping-text">
              캠핑장에서의 시간은 생각보다 빠르게 흐른다. 식사를 하고 난 후에
              저녁식사를 준비할 마음가짐을 해야한다. 설거지를 하고 점심 식사를
              하며 발생한 쓰레기를 정리한다.
            </div>
            {checkState[11].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[12]);
            }}
          >
            <div className="main-todo-carcamping-text">
              여유롭게 시간을 즐겨라. 블루투스 스피커는 옆 사이트의 사람들에게
              피해가지 않을 정도의 음량으로 즐기고 너무 시끄럽게 떠들지않는다면
              당신의 시간도 보장받는다.
            </div>
            {checkState[12].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[13]);
            }}
          >
            <div className="main-todo-carcamping-text">
              조명과 음악과 분위기를 느끼며 저녁을 먹어라. 점심식사와 마찬가지로
              바로바로 정리하는 것이 좋다.
            </div>
            {checkState[13].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[14]);
            }}
          >
            <div className="main-todo-carcamping-text">
              가져온 감성템 (조명, 음악 등) 을 이용하여 자신만의 감성에 흠뻑
              젖어라. 화로대에 장작을 올리고 불을 붙여 감성을 더해라
            </div>
            {checkState[14].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[15]);
            }}
          >
            <div className="main-todo-carcamping-text">
              저녁 시간에는 더욱 더 조심할 필요가 있다. 최대한 피해가 가지
              않도록 즐긴다.
            </div>
            {checkState[15].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
        </div>
      );
    } else if (todoState === 4) {
      return (
        <div className="main-todobox">
          <div className="main-todobox-level"> 오토캠핑 마무리</div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[16]);
            }}
          >
            <div className="main-todo-carcamping-text">
              캠핑장 도착 후 캠핑을 준비한 것의 역순으로 진행한다.
            </div>
            {checkState[16].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[17]);
            }}
          >
            <div className="main-todo-carcamping-text">
              머무른 자리는 티도 안나게끔 깨끗하게 치운다.
            </div>
            {checkState[17].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              todoCheck(checkState[18]);
            }}
          >
            <div className="main-todo-carcamping-text">
              캠핑장의 시간을 돌아보며 귀가한다.
            </div>
            {checkState[18].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
          <hr></hr>
          <div
            className="main-todo-carcamping"
            onClick={() => {
              if (window.confirm("댓글을 남기러 떠나보실래요?") === true) {
                todoCheck(checkState[19]);
                navigate("/review");
              }
            }}
          >
            <div className="main-todo-carcamping-text">
              리뷰를 작성하고 경험치를 획득한다.
            </div>
            {checkState[19].done === true ? (
              <img
                src="/asset/icons/ok.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            ) : (
              <img
                src="/asset/icons/not.png"
                alt=""
                className="main-todo-carcamping-img"
              />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
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

export default CarCamping;
