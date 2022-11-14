import React from "react";

// css
import './style/SlideUpModal.css'

function ModalBasic(props) {
  // 모달 끄기 
  const closeModal = () => {
      props.setModalOpen(false);
      // console.log(props.campSiteList[props.listIdx].id)
  };

  return (
      <div className={props.modalOpen ? "open-modal": "close-modal"}>
          <button className="w-btn" onClick={closeModal}>
              X
          </button>
          <div>{"하이"}</div>
      </div>
  );
}
export default ModalBasic;