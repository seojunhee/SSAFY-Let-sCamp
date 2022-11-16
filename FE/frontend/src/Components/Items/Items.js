import React, { useState } from "react";
import "./style/Items.css";

const Items = (item) => {
  const [itemState, SetItem] = useState(item.item);
  console.log(itemState);

  const List = (item) => {
    switch (item.item) {
      case "테이블":
        return (
          <div>
            <img
              src="./asset/itemIcons/table.png"
              alt=""
              className="items-itemicon"
            />
            {item.item}
          </div>
        );
      case "차박용 텐트":
        return (
          <div>
            <img
              src="./asset/itemIcons/"
              alt="차박용 텐트"
              className="items-itemicon"
            />
            {item.item.name}
          </div>
        );
      default:
        return <div>아이템이 없습니다.</div>;
    }
  };

  return (
    <div>
      {itemState.map((items, key) => (
        <div className="item" key={items.id}>
          {items.check === false ? (
            <div className="">
              <List item={items.item}></List>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Items;
