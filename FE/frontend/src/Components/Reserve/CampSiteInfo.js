import React from "react";

// css
import "./style/CampSiteInfo.css"

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
      <div className="grid">
        <div className="item col-4">
          <img src="../../logo192.png" className="img" alt="캠핑장 사진" />
        </div>
        <div className="item col-8">
          
          <div className="outer-div text-h3">
            솔내음 캠핑장
          </div>
          <div className="outer-div">
            <p>충청남도 서천군</p>
          </div>
          
        </div>
      </div>
      <div className="grid">
        <h3 className="item col-4">캠핑 유형</h3>
        <div className="item col-8 outer-div">
          <div className="inner-div">
            <select name="campCategory" className="width-80 rem117">
              <option value="caraban">카라반</option>
            </select>
          </div>
        </div>
      </div>
    </>
    
  )
};

export default CampSite;