import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/CampSite.css"
const CampSite = (props) => {
  const navigate = useNavigate();

  const campSiteData = props.campSiteList[props.listIdx]

  const switchModal = () => {
    props.setModalOpen(!props.modalOpen)
  }

  const showMap = () => {
    navigate("/map", {state : {lat: campSiteData.lat, lon: campSiteData.lon}})
  }

  return (
    <div className="height-55 section-card mt-25">
      <h4>당신에게 알맞은 캠핑장은</h4>
      <h3> {(props.campSiteList[props.listIdx].name)} </h3>
      <div className="height-65 container">
        <div className={props.modalOpen ? "open-modal": "close-modal"}>
          <div>
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
                {campSiteData.address}
              </div>
            </div>
            <hr></hr>
            <div className="modal-summary">
              <div>
                <img
                  src="/asset/icons/time.png"
                  alt=""
                  className="detail-contents-icons"
                ></img>
              </div>
              <div className="detail-contents-div">{campSiteData.running_day}</div>
            </div>
            <hr></hr>
            <div className="modal-summary">
              <div>
                <img
                  src="/asset/icons/call.png"
                  alt=""
                  className="detail-contents-icons"
                ></img>
              </div>
              <div className="detail-contents-div">{campSiteData.tel}</div>
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
              <div className="detail-contents-div">
                <a href={campSiteData.homepage}>
                {campSiteData.homepage}
                </a>
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
              <div className="detail-contents-div">{campSiteData.simple_des}</div>
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
              <div className="detail-contents-div">{campSiteData.keywords}</div>
            </div>
            <hr></hr>
          </div>
        </div>
        <img src={props.campSiteList[props.listIdx].thumb} alt="캠핑장 사진" className="width-100"/>
      </div>
      <div className="map-explain-btn">
        <div>
          <button onClick={switchModal} className={"camp-site-detail-btn"}>{props.modalOpen ? "사진 보기": "설명 보기"}</button>
        </div>
        <div>
          <button onClick={showMap} className={"camp-site-detail-btn"}>지도 보기</button>
        </div>
      </div>
    </div>
  )
};

export default CampSite;