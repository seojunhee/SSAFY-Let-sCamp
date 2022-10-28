import React from "react";
import { useRecoilState } from "recoil";
import { questionPage } from "../../Store/state";

const Question = () => {
  const [page] = useRecoilState(questionPage);
  
  switch (page){
    case 1:
      return <h2 className="contanier">"누구와 가시나요?"</h2>
    case 2:
      return <h2 className="contanier">"반려견과 함께 가나요?"</h2>
    case 3:
      return <h2 className="contanier">"좋아하는 장소를 골라주세요"</h2>
    case 4:
      return <h2 className="contanier">"캠핑 유형을 선택해주세요"</h2>
    default:
      return <h2 className="contanier">"언제 가시나요?"</h2>
  }
  
};

export default Question;