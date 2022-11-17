import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/Items.css";

const Items = (item) => {
  const [itemState, SetItem] = useState(item.item);
  const [textstate, SetText] = useState();

  const texthide = () => {
    const check = !textstate;
    SetText(check);
  };

  let url;
  const checking = (itemData) => {
    if (item.category === "일반야영장") {
      url = LetsCamp.normal.change();
    } else if (item.category === "글램핑") {
      url = LetsCamp.glamping.change();
    } else if (item.category === "카라반") {
      url = LetsCamp.caraban.change();
    } else if (item.category === "자동차 야영장") {
      url = LetsCamp.carcamping.change();
    }
    //const url = LetsCamp.normal.change();
    const findIndex = itemState.findIndex((data) => data.id === itemData.id);
    let copyArray = [...itemState];
    if (findIndex !== -1) {
      copyArray[findIndex] = {
        ...copyArray[findIndex],
        check: !itemData.check,
      };
    }
    SetItem(copyArray);
    axios
      .put(
        url,
        { check: !itemData.check, id: itemData.id },
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

  const List = (items) => {
    switch (items.items.item) {
      case "테이블":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/table.png"
              alt="테이블"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "차박용 텐트":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/carTent.png"
              alt="차박용 텐트"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "담요":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/blanket.png"
              alt="담요"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "블루투스 스피커":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/bluetoothSpeaker.png"
              alt="블루투스 스피커"
              className="items-itemicon"
            />
            <br></br>
            스피커
          </div>
        );
      case "화로대":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/brazierStand.png"
              alt="화로대"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "모기약":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/bugSpray.png"
              alt="모기약"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "버너":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/burner.png"
              alt="버너"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "부탄가스":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/butein.png"
              alt="부탄가스"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "차량용 냉장고":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/carRefrigerator.png"
              alt="차량용 냉장고"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "차량 평탄화 매트":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/mat.png"
              alt="차량 평탄화 매트"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "자충베개 혹은 베개":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/pillow.png"
              alt="자충베개 혹은 베개"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "숯":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/chacoal.png"
              alt="숯"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "의자":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/chair.png"
              alt="의자"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "조리도구":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/cookingTool.png"
              alt="조리도구"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "코펠":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/coppell.png"
              alt="코펠"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "설거지통":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/dishBottle.png"
              alt="설거지통"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "선풍기":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/fan.png"
              alt="선풍기"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "그릴":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/grill.png"
              alt="그릴"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "아이스박스":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/iceBox.png"
              alt="아이스박스"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "조명":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/lamp.png"
              alt="조명"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "긴팔/긴바지":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/longClothes.png"
              alt="긴팔/긴바지"
              className="items-itemicon"
            />
            <br></br>
            긴옷
          </div>
        );
      case "자충매트":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/mat.png"
              alt="자충매트"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "비상약":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/medicine.png"
              alt="비상약"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "멀티탭":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/multiTab.png"
              alt="멀티탭"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "팬":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/pan.png"
              alt="팬"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "자충베개":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/pillow.png"
              alt="자충베개"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "릴선":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/realWire.png"
              alt="릴선"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "슬리퍼":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/sleeper.png"
              alt="슬리퍼"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "이불 혹은 침낭":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/sleepingBag.png"
              alt="이불 혹은 침낭"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "보조배터리":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/subBattery.png"
              alt="보조배터리"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "타프":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/tarpaulin.png"
              alt="타프"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "휴지":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/tissue.png"
              alt="휴지"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "수건":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/towel.png"
              alt="수건"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "세면도구":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/washTool.png"
              alt="세면도구"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "쓰레기봉투":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/waste.png"
              alt="쓰레기봉투"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "물티슈":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/wetTissue.png"
              alt="물티슈"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      case "장작":
        return (
          <div
            onClick={() => {
              checking(items.items);
            }}
            className="items-icons"
          >
            <img
              src="./asset/itemIcons/wood.png"
              alt="장작"
              className="items-itemicon"
            />
            <br></br>
            {items.items.item}
          </div>
        );
      default:
        return <div>아이템이 없습니다.</div>;
    }
  };

  return (
    <div className="itempage-items">
      {textstate ? (
        <div className="itempage-items-text">
          준비물을 챙겨서 경험치를 획득해보세요! <br></br> 준비물을 챙기시고
          터치하세요!
        </div>
      ) : null}
      <div className="items-before-text">
        <img
          src="./asset/icons/infomation.png"
          alt=""
          onClick={() => {
            texthide();
          }}
          className="itempage-items-infoicon"
        />
        챙겨야 할 물품
      </div>
      {itemState ? (
        <div className="items-before">
          {itemState.map((item, key) => (
            <div className="item" key={item.item}>
              {item.check === false ? (
                <div className="">
                  <List items={item}></List>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className="items-after-text">챙긴 물품</div>
      {itemState ? (
        <div className="items-after">
          {itemState.map((item, key) => (
            <div className="item" key={item.item}>
              {item.check === true ? (
                <div className="">
                  <List items={item}></List>
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
