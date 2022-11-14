import React from "react";

// css
import './style/SlideUpModal.css'

function ModalBasic(props) {


  const campSiteData = props.campSiteList[props.listIdx]

  // 모달 끄기 
  const closeModal = () => {
      props.setModalOpen(false);
      // console.log(props.campSiteList[props.listIdx].id)
  };

  return (
      <div className={props.modalOpen ? "open-modal": "close-modal"}>
        <div className="detail-contents">
          <div className="margin-bottom-5">
            <h4>
              {campSiteData.simple_des}
            </h4>
          </div>
          <details className="detail-contents-box">
            <summary className="detail-contents-box-summary">
              <img
                src="/asset/icons/location.png"
                alt=""
                className="detail-contents-icons"
              ></img>{" "}
              위치
              <button className="btn-right2">
                지도로 보기
              </button>
            </summary>
            <div className="">
              {campSiteData.address}{" "}
              
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
            <div>
              <a href={campSiteData.homepage}>
              {campSiteData.homepage}
              </a>
            </div>
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
      </div>
  );
}
export default ModalBasic;