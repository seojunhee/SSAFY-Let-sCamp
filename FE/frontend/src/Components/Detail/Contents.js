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
      <div>
        위치 {campSiteData.address}{" "}
        <button onClick={search}>지도로 보기</button>
      </div>
      <div>전화번호 : {campSiteData.tel}</div>
      <div>{campSiteData.simple_des}</div>
      <hr />
      <div>애완동물 가능 여부 : {campSiteData.animal}</div>
      <div>영업 여부 : {campSiteData.running}</div>
      <div>영업 시즌 : {campSiteData.running_season}</div>
      <div>테마 : {campSiteData.theme}</div>
    </div>
  );
};

export default Contents;
