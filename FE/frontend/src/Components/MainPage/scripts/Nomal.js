import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/Nomal.css";
import LetsCamp from "../../../api/LetsCamp.js";

const Nomal = (day) => {
  const [time, SetTime] = useState();
  const [todoState, SetTodo] = useState(1);
  const [checkState, SetCheck] = useState();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    //SetCheck(copyArray);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
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
            <Slider {...settings}>
              <div
                className={checkState[0].done ? "checked" : null}
                onClick={() => {
                  todoCheck(checkState[0]);
                }}
              >
                자신이 예약한 캠핑장의 유형이 어떠한 유형인지 체크하고 필요한
                용품을 확인
              </div>
              <div
                className={checkState[1].done ? "checked" : null}
                onClick={() => {
                  todoCheck(checkState[1]);
                }}
              >
                텐트, 타프, 침구류, 테이블, 의자, 조명, 버너, 화로대, 릴선,
                멀티탭 등 바로 구하기 힘든 캠핑용품을 먼저 준비
              </div>
              <div>
                예약한 캠핑장 정보를 레츠캠프를 이용하여 확인하고 해당 캠핑장에
                없어서 미리 준비해야할 용품을 따로 준비한다.
              </div>
            </Slider>
          ) : null}
        </div>
      );
    } else if (todoState === 2) {
      return (
        <div>
          <Slider {...settings}>
            <div>미리 준비해둔 캠핑용품 다시 확인</div>
            <div>
              아이스박스를 비워둔 채로 이동 → 이후 장을 볼 때 얼음을 사서 같이
              산 물, 음료, 술 등과 함께 넣어 다시 이동하는 것이 편리
            </div>
            <div>침구류, 세면도구, 조리도구, 비상약, 슬리퍼를 챙긴다.</div>
            <div>
              깨끗한 캠핑장 이용을 위해 설거지통을 준비하고 캠핑을 하며 발생하는
              쓰레기 처리를 위해 쓰레기봉투를 준비한다.
            </div>
          </Slider>
        </div>
      );
    } else if (todoState === 3) {
      return (
        <div>
          <Slider {...settings}>
            <div>
              텐트, 타프, 테이블, 의자 등 가장 먼저 준비했던 장비들이 제일 먼저
              쓰인다. 일단 위 용품들만 캠핑사이트로 옮긴다.
            </div>
            <div>
              텐트, 타프를 설치하는 것은 꽤나 오래 걸리고 꽤나 힘들다. 미리
              테이블과 의자를 설치해서 중간 중간 쉴 수 있도록 한다.
            </div>
            <div>
              텐트, 타프를 설치하고 나면 식사를 위한 세팅을 한다. 부탄가스,
              버너, 그릴 등을 설치하고 점심식사를 진행한다.
            </div>
            <div>
              캠핑장에서의 시간은 생각보다 빠르게 흐른다. 식사를 하고 난 후에
              저녁식사를 준비할 마음가짐을 해야한다. 설거지를 하고 점심 식사를
              하며 발생한 쓰레기를 정리한다.
            </div>
            <div>
              여유롭게 시간을 즐겨라. 블루투스 스피커는 옆 사이트의 사람들에게
              피해가지 않을 정도의 음량으로 즐기고 너무 시끄럽게 떠들지않는다면
              당신의 시간도 보장받는다.
            </div>
            <div>
              해가 떨어지면 조명을 키고, 화로대에 장작을 올리고 불을 붙여 감성을
              더해라
            </div>
            <div>저녁식사 = 점심식사</div>
            <div>
              저녁 시간에는 더욱 더 조심할 필요가 있다. 최대한 피해가 가지
              않도록 즐긴다.
            </div>
          </Slider>
        </div>
      );
    } else if (todoState === 4) {
      return (
        <div>
          <Slider {...settings}>
            <div>캠핑장 도착 후 캠핑을 준비한 것의 역순으로 진행한다.</div>
            <div>머무른 자리는 티도 안나게끔 깨끗하게 치운다. </div>
            <div>캠핑장의 시간을 돌아보며 귀가한다.</div>
            <div>다시 레츠캠프를 이용한다.</div>
          </Slider>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="levelbox">
        <img
          src="/asset/level/level1.png"
          alt=""
          className="levelimg"
          onClick={() => {
            SetTodo(1);
          }}
        ></img>
        {day.day <= 0 ? (
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
        {day.day <= 0 ? (
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
        <img
          src="/asset/level/level4.png"
          alt=""
          className="levelimg"
          onClick={() => {
            SetTodo(4);
          }}
        ></img>
      </div>
      <TodoByLevel></TodoByLevel>
    </div>
  );
};

export default Nomal;
