import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Items.css";

const Items = ({ items, reservationData }) => {
  const [itemState, SetItem] = useState(items);

  const List = () => {
    return (
      <div>
        {itemState.map((itemState, key) => (
          <div className="item" key={itemState.id}>
            <div className="" draggable="true">
              {itemState.item}
              <input
                type="checkbox"
                className=""
                value={itemState.id}
                onChange={checking}
                checked={itemState.check}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const checking = (e) => {
    const url = LetsCamp.normal.change();
    const findIndex = itemState.findIndex((data) => data.id === e.target.value);
    let copyArray = [...itemState];
    if (findIndex !== -1) {
      copyArray[findIndex] = {
        ...copyArray[findIndex],
        check: e.target.checked,
      };
    }
    SetItem(copyArray);
    axios
      .put(
        url,
        { check: e.target.checked, id: e.target.value },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.accessToken}`,
          },
        }
      )
      .then(function (response) {
        console.log("변경성공");
        console.log(response);
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
          <img src="/asset/box.gif" alt="" className="mainpage-items-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Items;
