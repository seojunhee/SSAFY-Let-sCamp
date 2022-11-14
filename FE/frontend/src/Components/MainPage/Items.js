import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Items.css";

const Items = ({ items }) => {
  const [itemState, SetItem] = useState(items);
  const [boxState, SetBoxState] = useState(false);

  let dragitem;

  const Box = () => {
    return (
      <div className="boxmodal">
        <div className="boxmodal-button">
          <button
            onClick={() => {
              closeBox();
            }}
          >
            x
          </button>
        </div>
        {itemState.map((items, key) => (
          <div className="item" key={items.id}>
            {items.check === true ? (
              <div className="">
                {items.item}
                <button
                  onClick={() => {
                    checking(items);
                  }}
                >
                  꺼내기
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  const openBox = () => {
    SetBoxState(true);
  };

  const closeBox = () => {
    SetBoxState(false);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drag = (item) => {
    dragitem = item;
    console.log(dragitem);
  };

  const onDropFiles = (event) => {
    console.log("드롭함");
    checking(dragitem);
  };

  const setTouchPosition = (itemState) => {
    dragitem = itemState;
    console.log(itemState);
  };

  const touchEnd = (e) => {
    console.log("드롭함");
    checking(dragitem);
  };

  const List = () => {
    return (
      <div>
        {itemState.map((itemState, key) => (
          <div className="item" key={itemState.id}>
            {itemState.check === false ? (
              <div
                className=""
                draggable
                onDragStart={() => drag(itemState)}
                onTouchStart={() => setTouchPosition(itemState)}
              >
                {itemState.item}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  const checking = (item) => {
    const url = LetsCamp.normal.change();
    const findIndex = itemState.findIndex((data) => data.id === item.id);
    let copyArray = [...itemState];
    if (findIndex !== -1) {
      copyArray[findIndex] = {
        ...copyArray[findIndex],
        check: !item.check,
      };
    }
    SetItem(copyArray);
    axios
      .put(
        url,
        { check: !item.check, id: item.id },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.accessToken}`,
          },
        }
      )
      .then(function (response) {
        console.log("변경성공");
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  };

  return (
    <div className="mainpage-items">
      <div className="mainpage-items-cover">
        <div className="mainpage-items-title">준비물</div>
        <div className="mainpage-items-list">준비물 목록</div>
        <div className="mainpage-items-box">
          <div>{items ? <List></List> : <h1>준비물 정보가 없습니다.</h1>}</div>
          <img
            src="/asset/box.gif"
            alt=""
            className="mainpage-items-img"
            onClick={() => {
              openBox();
            }}
            onDragOver={(event) => dragOver(event)}
            onDrop={(event) => onDropFiles(event)}
            onTouchEnd={(event) => touchEnd(event)}
          ></img>
        </div>
      </div>
      {boxState === true ? <Box></Box> : null}
    </div>
  );
};

export default Items;
