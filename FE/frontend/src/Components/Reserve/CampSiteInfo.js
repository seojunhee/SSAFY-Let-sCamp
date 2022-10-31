import React from "react";

const CampSite = () => {
  // 캠핑장 추천 장소 리스트
  // const [recommendCampList, setRecList] = useState(null);

  // 캠핑장 추천장소 api 호출
  // const RecCampLoad = async () => {
  //   const RecCampData = await getRec();
  //   if (RecCampData.code === 200) setRecList(RecCampData);
  // };

  // 전역 변수로 리스트 컨트롤

  return (
    <>
      <div className="container">
        <div>
          <img src="." alt="캠핑장 사진" />
        </div>
        <div>
          <h3>솔내음 캠핑장</h3>
          <p>충청남도 서천군</p>
        </div>
      </div>
      <div>
        <h3>캠핑장 유형</h3>
        <select name="campCategory">
          <option value="caraban">카라반</option>
        </select>
      </div>
    </>
    
  )
};

export default CampSite;