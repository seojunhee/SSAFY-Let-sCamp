import React from "react";
import { useRecoilState } from "recoil";
import { questionPage } from "../../Store/state";

const Question = () => {
  const [page] = useRecoilState(questionPage);
  
  switch (page){
    case 1:
      return <h2 className="">누구와 가시나요?</h2>
    case 2:
      return (
          <h2>반려동물과 함께 가나요?</h2>
      )
    case 3:
      return <h2 className="">좋아하는 장소를 골라주세요</h2>
    case 4:
      return <h2 className="">캠핑 유형을 선택해주세요</h2>
    case 5:
      return <h2 className="">언제 가시나요?</h2>
    case 6:
      return <h2>태그를 선택해주세요</h2>
    default:
      return
  }
  
};

export default Question;