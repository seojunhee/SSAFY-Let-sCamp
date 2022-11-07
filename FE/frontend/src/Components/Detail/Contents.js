import React from "react";
import { useRecoilState } from "recoil";
import { campSiteState } from "../../Store/state.js";
import { useNavigate } from "react-router-dom";

const Contents = () => {
  const navigate = useNavigate();
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);

  const search = () => {
    console.log(campSiteData.lat);
    console.log(campSiteData.lon);
    navigate("/map", { lat: campSiteData.lat, lon: campSiteData.lon });
  };
  return (
    <div>
      <div>별점</div>
      <details>
        <summary>위치</summary>
        <div class="tpt">{campSiteData.address}</div>
        <button onClick={search}>지도로 보기</button>
      </details>
      <details>
        <summary>운영시간</summary>
        <div class="tpt">{campSiteData.running_day}</div>
      </details>
      <details>
        <summary>전화번호</summary>
        <div class="tpt">전화번호 : {campSiteData.tel}</div>
      </details>
      <details>
        <summary>홈페이지</summary>
        <div>{campSiteData.homepage}</div>
      </details>
      <details>
        <summary>설명</summary>
        <div>{campSiteData.simple_des}</div>
      </details>
      <details>
        <summary>태그</summary>
        <div>{campSiteData.keywords}</div>
      </details>
    </div>
  );
};

export default Contents;
