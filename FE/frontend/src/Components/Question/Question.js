import React from "react";
import { useRecoilState } from "recoil";
import { questionPage } from "../../Store/state";

const Question = () => {
  const [page] = useRecoilState(questionPage);
  
  switch (page){
    case 1:
      return <h2 className="">"누구와 가시나요?"</h2>
    case 2:
      return (
        <div className="height-30">
          <h2>"반려견과 함께 가나요?"</h2>
          <img src="." alt="반려동물 사진" />
        </div>
      )
    case 3:
      return <h2 className="margin-bottom-5 height-271">"좋아하는 장소를 골라주세요"</h2>
    case 4:
      return <h2 className="">"캠핑 유형을 선택해주세요"</h2>
    default:
      return <h2 className="">"언제 가시나요?"</h2>
  }
  
};

export default Question;