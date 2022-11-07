import React from "react";

// css
import "./style/CampSiteInfo.css"

const CampSite = (props) => {
  // 캠핑장 추천 장소 리스트
  // const [recommendCampList, setRecList] = useState(null);

  // 캠핑장 추천장소 api 호출
  // const RecCampLoad = async () => {
  //   const RecCampData = await getRec();
  //   if (RecCampData.code === 200) setRecList(RecCampData);
  // };
  const cateList = props.campSiteData.category.split(', ')
  // 전역 변수로 리스트 컨트롤
  
  const selectCate = (e) => {
    console.log(e.target.value)
    props.setCampingCate(e.target.value)
  }

  return (
    <>
      <div className="grid">
        <div className="item col-4">
          <img src={props.campSiteData.thumb} className="img" alt="캠핑장 사진" />
        </div>
        <div className="item col-8">
          
          <div className="outer-div text-h3">
            {props.campSiteData.name}
          </div>
          <div className="outer-div">
            <p>{props.campSiteData.dosi} {props.campSiteData.gugun}</p>
          </div>
          
        </div>
      </div>
      <div className="grid">
        <h3 className="item col-4">캠핑 유형</h3>
        <div className="item col-8 outer-div">
          <div className="inner-div">
            <select name="campCategory" className="width-80 rem117" onChange={ selectCate }>
              {
                cateList.map((cate, idx) => {
                  return (
                    <option value={cate} key={idx}>{cate}</option>
                  )
                })
              }
              
              
            </select>
          </div>
        </div>
      </div>
    </>
    
  )
};

export default CampSite;