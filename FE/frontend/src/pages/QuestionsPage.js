import React from "react"
import Header from "../Components/Question/Header.js"
import MoveButton from "../Components/Question/MoveButton.js"
import ChoiceButton from "../Components/Question/ChoiceButton.js"
import Question from "../Components/Question/Question.js";
import { useRecoilState } from "recoil";
import { questionPage } from "../Store/state.js";
import "../App.css"

const Questions = () => {

  // 페이지를 구분할 변수가 필요하고
  // 페이지에 따라 ChoiceButton과 Question, MoveButton의 변화가 필요하다.
  const [page] = useRecoilState(questionPage);

  

  return (
    <div className="App">
      <Header />
      <Question />
      <ChoiceButton />
      <MoveButton />
      <div>{page}</div>
    </div>);

}


export default Questions;