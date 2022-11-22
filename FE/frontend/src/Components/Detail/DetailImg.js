import React from "react";
import { useRecoilState } from "recoil";
import { campSiteState } from "../../Store/state.js";
import "./style/DetailImg.css";

const DetailImg = () => {
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);

  return (
    <div className="detailimg">
      <div className="detailimg-title">{campSiteData.name}</div>
      <img
        src={campSiteData.thumb}
        alt="대충 이미지"
        className="detailimg-img"
      />
    </div>
  );
};

export default DetailImg;
