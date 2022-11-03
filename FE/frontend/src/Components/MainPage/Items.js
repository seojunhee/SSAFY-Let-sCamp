import React from "react";
import "./style/Items.css";

const Items = ({ items }) => {
  return (
    <div className="mainpage-items">
      <div className="mainpage-items-cover">
        <div className="mainpage-items-title">준비물</div>
        <div className="mainpage-items-list">준비물 목록</div>
        <div>
          {items ? (
            <div>
              <div className="">
                {items[0].item} <input type="checkbox" className="" value="" />
              </div>
              <div className="">
                {items[1].item} <input type="checkbox" className="" value="" />
              </div>
              <div className="">
                {items[2].item} <input type="checkbox" className="" value="" />
              </div>
              <div className="">
                {items[3].item} <input type="checkbox" className="" value="" />
              </div>
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
