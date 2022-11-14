import React from "react";

function ModalBasic(props) {
  // 모달 끄기 
  const closeModal = () => {
      props.setModalOpen(false);
  };

  return (
      <div>
          <button onClick={closeModal}>
              X
          </button>
          <p>모달창입니다.</p>
      </div>
  );
}
export default ModalBasic;