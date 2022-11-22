import React from "react";
import "./style/CampingList.css";
import { useNavigate } from "react-router-dom";

const CampingList = (CampingListData) => {
  const navigate = useNavigate();
  return (
    <div className="campinglist">
      {CampingListData.CampingListData.map((CampingListData, key) => (
        <div key={key}>
          <div
            className="campinglist-box"
            onClick={() => {
              navigate("/detail", {
                state: { campingId: CampingListData.id },
              });
            }}
          >
            <img
              src={CampingListData.thumb}
              alt="캠핑장이미지"
              className="campinglist-img"
            />
            <div className="campinglist-name">{CampingListData.name}</div>
            <div className="campinglist-address">{CampingListData.address}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CampingList;
