import React, { useEffect, useState } from "react";

const CampSite = () => {
  // 캠핑장 추천 장소 리스트
  const [recommendCampList, setRecList] = useState(null);

  // 캠핑장 추천장소 api 호출
  // const RecCampLoad = async () => {
  //   const RecCampData = await getRec();
  //   if (RecCampData.code === 200) setRecList(RecCampData);
  // };

  // 전역 변수로 리스트 컨트롤

  return (
    <>
      <h4>당신에게 알맞은 캠핑장은</h4>
      <h3>솔내음 캠핑장</h3>
      <img src="." alt="캠핑장 사진" />
    </>
  )
};

export default CampSite;