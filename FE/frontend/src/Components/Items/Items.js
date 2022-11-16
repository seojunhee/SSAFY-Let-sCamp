import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Items.css";

const Items = (item) => {
  const [itemState, SetItem] = useState(item.item);

  const checking = (item1234) => {
    //const url = LetsCamp.normal.change();
    console.log(item1234);
    const findIndex = itemState.findIndex((data) => data.id === item1234.id);
    let copyArray = [...itemState];
    if (findIndex !== -1) {
      copyArray[findIndex] = {
        ...copyArray[findIndex],
        check: !item1234.check,
      };
    }
    console.log(copyArray);
    SetItem(copyArray);
    /*
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
      */
  };

  const List = (items) => {
    switch (items.items.item) {
      case "테이블":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
          >
            <img
              src="./asset/itemIcons/table.png"
              alt="테이블"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "차박용 텐트":
        return (
          <div>
            <img
              src="./asset/itemIcons/carTent.png"
              alt="차박용 텐트"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "담요":
        return (
          <div>
            <img
              src="./asset/itemIcons/blanket.png"
              alt="담요"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "블루투스 스피커":
        return (
          <div>
            <img
              src="./asset/itemIcons/bluetoothSpeaker.png"
              alt="블루투스 스피커"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "화로대":
        return (
          <div>
            <img
              src="./asset/itemIcons/brazierStand.png"
              alt="화로대"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "모기약":
        return (
          <div>
            <img
              src="./asset/itemIcons/bugSpray.png"
              alt="모기약"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "버너":
        return (
          <div>
            <img
              src="./asset/itemIcons/burner.png"
              alt="버너"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "부탄가스":
        return (
          <div>
            <img
              src="./asset/itemIcons/butein.png"
              alt="부탄가스"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "차량용 냉장고":
        return (
          <div>
            <img
              src="./asset/itemIcons/carRefrigerator.png"
              alt="차량용 냉장고"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "차량 평탄화 매트":
        return (
          <div>
            <img
              src="./asset/itemIcons/mat.png"
              alt="차량 평탄화 매트"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "자충베개 혹은 베개":
        return (
          <div>
            <img
              src="./asset/itemIcons/pillow.png"
              alt="자충베개 혹은 베개"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "숯":
        return (
          <div>
            <img
              src="./asset/itemIcons/chacoal.png"
              alt="숯"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "의자":
        return (
          <div>
            <img
              src="./asset/itemIcons/chair.png"
              alt="의자"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "조리도구":
        return (
          <div>
            <img
              src="./asset/itemIcons/cookingTool.png"
              alt="조리도구"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "코펠":
        return (
          <div>
            <img
              src="./asset/itemIcons/coppell.png"
              alt="코펠"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "설거지통":
        return (
          <div>
            <img
              src="./asset/itemIcons/dishBottle.png"
              alt="설거지통"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "선풍기":
        return (
          <div>
            <img
              src="./asset/itemIcons/fan.png"
              alt="선풍기"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "그릴":
        return (
          <div>
            <img
              src="./asset/itemIcons/grill.png"
              alt="그릴"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "아이스박스":
        return (
          <div>
            <img
              src="./asset/itemIcons/iceBox.png"
              alt="아이스박스"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "조명":
        return (
          <div>
            <img
              src="./asset/itemIcons/lamp.png"
              alt="조명"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "긴팔/긴바지":
        return (
          <div>
            <img
              src="./asset/itemIcons/longClothes.png"
              alt="긴팔/긴바지"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "자충매트":
        return (
          <div>
            <img
              src="./asset/itemIcons/mat.png"
              alt="자충매트"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "비상약":
        return (
          <div>
            <img
              src="./asset/itemIcons/medicine.png"
              alt="비상약"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "멀티탭":
        return (
          <div>
            <img
              src="./asset/itemIcons/multiTab.png"
              alt="멀티탭"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "팬":
        return (
          <div>
            <img
              src="./asset/itemIcons/pan.png"
              alt="팬"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "자충베개":
        return (
          <div>
            <img
              src="./asset/itemIcons/pillow.png"
              alt="자충베개"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "릴선":
        return (
          <div>
            <img
              src="./asset/itemIcons/realWire.png"
              alt="릴선"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "슬리퍼":
        return (
          <div>
            <img
              src="./asset/itemIcons/sleeper.png"
              alt="슬리퍼"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "이불 혹은 침낭":
        return (
          <div>
            <img
              src="./asset/itemIcons/sleepingBag.png"
              alt="이불 혹은 침낭"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "보조배터리":
        return (
          <div>
            <img
              src="./asset/itemIcons/subBattery.png"
              alt="보조배터리"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "타프":
        return (
          <div>
            <img
              src="./asset/itemIcons/tarpaulin.png"
              alt="타프"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "휴지":
        return (
          <div>
            <img
              src="./asset/itemIcons/tissue.png"
              alt="휴지"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "수건":
        return (
          <div>
            <img
              src="./asset/itemIcons/towel.png"
              alt="수건"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "세면도구":
        return (
          <div>
            <img
              src="./asset/itemIcons/washTool.png"
              alt="세면도구"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "쓰레기봉투":
        return (
          <div>
            <img
              src="./asset/itemIcons/waste.png"
              alt="쓰레기봉투"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "물티슈":
        return (
          <div>
            <img
              src="./asset/itemIcons/wetTissue.png"
              alt="물티슈"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      case "장작":
        return (
          <div>
            <img
              src="./asset/itemIcons/wood.png"
              alt="장작"
              className="items-itemicon"
            />
            {items.items.item}
          </div>
        );
      default:
        return <div>아이템이 없습니다.</div>;
    }
  };

  return (
    <div>
      {itemState ? (
        <div className="items-before">
          {itemState.map((items, key) => (
            <div className="item" key={items.id}>
              {items.check === false ? (
                <div className="">
                  <List items={items}></List>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      {itemState ? (
        <div className="items-after">
          {itemState.map((items, key) => (
            <div className="item" key={items.id}>
              {items.check === true ? (
                <div className="">
                  <List items={items.items}></List>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Items;
