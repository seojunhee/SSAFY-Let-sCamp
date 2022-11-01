import React from "react";
import { useRecoilState } from "recoil";
import { questionPage } from "../../Store/state";

import "./style/ChoiceButton.css"

const ChoiceButton = () => { 
  const [page] = useRecoilState(questionPage);
  

  const question1 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn">
        <p>가족</p>
        <img src="." alt="가족"/>
      </div>
      <div className="item col-6 w-btn">
        <p>커플</p>
        <img src="." alt="커플"/>
      </div>
      <div className="item col-6 w-btn">
        <p>친구</p>
        <img src="." alt="친구"/>
      </div>
      <div className="item col-6 w-btn">
        <p>아이들과 함께</p>
        <img src="." alt="아이들"/>
      </div>
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
      <div className="choice-who">산</div>
      <div className="choice-who">바다</div>
      <div className="choice-who">도심</div>
      <div className="choice-who">숲</div>
      <div className="choice-who">섬</div>
    </div>
  )

  const question4 = (
    <div className="choice-area">
      <div className="choice-who">텐트</div>
      <div className="choice-who">오토캠핑</div>
      <div className="choice-who">카라반</div>
      <div className="choice-who">글램핑</div>
    </div>
  )

  const question5 = (
    <input type="date"/>
  )

  switch (page){
    case 1:
      return  question1 
    case 2:
      return question2
    case 3:
      return question3
    case 4:
      return question4
    default:
      return question5
  }
};

export default ChoiceButton;