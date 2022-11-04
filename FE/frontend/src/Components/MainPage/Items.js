import React from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Items.css";

const Items = ({ items, reservationData }) => {
  const checking = (e) => {
    const url = LetsCamp.normal.change();
    axios
      .put(
        url,
        { check: true, id: items[0].id },
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
        <div>
          {items ? (
            <div className="">
              {items[0].item}
              <input type="checkbox" className="" value={items[0].item} />
            </div>
          ) : (
            <h1>준비물 정보가 없습니다.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
