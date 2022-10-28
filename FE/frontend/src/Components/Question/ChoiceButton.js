import React from "react";
import { useRecoilState } from "recoil";
import { questionPage } from "../../Store/state";

import "./style/ChoiceButton.css"

const ChoiceButton = () => {
  const [page] = useRecoilState(questionPage);

  const question1 = (
    <div className="choice-area">
      <div className="choice-who">가족</div>
      <div className="choice-who">커플</div>
      <div className="choice-who">친구</div>
      <div className="choice-who">아이들과 함께</div>
    </div>
  )

  const question2 = (
    <div className="choice-area">
      <div className="choice-who">네</div>
      <div className="choice-who">아니요</div>
    </div>
  )

  const question3 = (
    <div className="choice-area">
      <div className="choice-who">네</div>
      <div className="choice-who">아니요</div>
    </div>
  )

  switch (page){
    case 1:
      return  question1 
    case 2:
      return question2
    case 3:
      return <h2 className="contanier">"좋아하는 장소를 골라주세요"</h2>
    case 4:
      return <h2 className="contanier">"캠핑 유형을 선택해주세요"</h2>
    default:
      return <h2 className="contanier">"언제 가시나요?"</h2>
  }
};

export default ChoiceButton;