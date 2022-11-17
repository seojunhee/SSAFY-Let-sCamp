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
    navigate("/map", {state:{ lat: campSiteData.lat, lon: campSiteData.lon, name: campSiteData.name, address: campSiteData.address }});
  };
  return (
    <div className="detail-contents p-y-1 section-card">
      <div>
        <div className="detailimg-title">{campSiteData.name}</div>
        <img
          src={campSiteData.thumb}
          alt="대충 이미지"
          className="detailimg-img"
        />
        <div>
          <h4>
            {campSiteData.simple_des}
          </h4>
        </div>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/location.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-div">
            {campSiteData.address || "정보없음"}
          </div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/time.png"
              alt=""
              className="detail-contents-icons"
            />
          </div>
          <div className="detail-contents-div">{campSiteData.running_day || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/call.png"
              alt=""
              className="detail-contents-icons"
            />
          </div>
          <div className="detail-contents-div">{campSiteData.tel || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/homepage.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-text">
            {campSiteData.homepage
            ?(<a href={campSiteData.homepage}>
            {campSiteData.homepage}
            </a>)
            :<div>정보없음</div>}
          </div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/detail.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-div">{campSiteData.simple_des || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/tag.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-div">{campSiteData.keywords || "태그없음"}</div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
