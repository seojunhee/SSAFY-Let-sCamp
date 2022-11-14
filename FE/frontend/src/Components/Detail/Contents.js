import React from "react";
import { useRecoilState } from "recoil";
import { campSiteState } from "../../Store/state.js";
import { useNavigate } from "react-router-dom";
import "./style/contents.css";

const Contents = () => {
  const navigate = useNavigate();
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);

  const search = () => {
    console.log(campSiteData.lat);
    console.log(campSiteData.lon);
    navigate("/map", {state:{ lat: campSiteData.lat, lon: campSiteData.lon }});
  };
  return (
    <div className="detail-contents">
      <div>{campSiteData.simple_des}</div>
      <div>별점</div>
      <details className="detail-contents-box">
        <summary className="detail-contents-box-summary">
          <img
            src="/asset/icons/location.png"
            alt=""
            className="detail-contents-icons"
          ></img>{" "}
          위치
        </summary>
        <div className="">
          {campSiteData.address}{" "}
          <button onClick={search} className="">
            지도로 보기
          </button>
        </div>
      </details>
      <hr></hr>
      <details className="detail-contents-box">
        <summary>
          {" "}
          <img
            src="/asset/icons/time.png"
            alt=""
            className="detail-contents-icons"
          ></img>
          운영시간
        </summary>
        <div className="">{campSiteData.running_day}</div>
      </details>
      <hr></hr>
      <details className="detail-contents-box">
        <summary>
          {" "}
          <img
            src="/asset/icons/call.png"
            alt=""
            className="detail-contents-icons"
          ></img>
          전화번호
        </summary>
        <div className="">전화번호 : {campSiteData.tel}</div>
      </details>
      <hr></hr>
      <details className="detail-contents-box">
        <summary>
          {" "}
          <img
            src="/asset/icons/homepage.png"
            alt=""
            className="detail-contents-icons"
          ></img>
          홈페이지
        </summary>
        <div>{campSiteData.homepage}</div>
      </details>
      <hr></hr>
      <details className="detail-contents-box">
        <summary>
          {" "}
          <img
            src="/asset/icons/detail.png"
            alt=""
            className="detail-contents-icons"
          ></img>
          설명
        </summary>
        <div>{campSiteData.simple_des}</div>
      </details>
      <hr></hr>
      <details className="detail-contents-box">
        <summary>
          {" "}
          <img
            src="/asset/icons/tag.png"
            alt=""
            className="detail-contents-icons"
          ></img>
          태그
        </summary>
        <div>{campSiteData.keywords}</div>
      </details>
      <hr></hr>
    </div>
  );
};

export default Contents;
