import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Header from "../Components/Question/Header.js";
import MoveButton from "../Components/Question/MoveButton.js";
import ChoiceButton from "../Components/Question/ChoiceButton.js";
import Question from "../Components/Question/Question.js";

// api
import letsCamp from "../api/LetsCamp";

// data
// import { useRecoilState } from "recoil";
// import { questionPage } from "../Store/state.js";

// css
import "../App.css"
import "./style/Button.css"

const Questions = () => {
  const [keyword, setKeyword] = useState("")
  const [campingCate, setCampingCate] = useState("")
  const [animal, setAnimal] = useState("")
  // 페이지를 구분할 변수가 필요하고
  // 페이지에 따라 ChoiceButton과 Question, MoveButton의 변화가 필요하다.
  // const [page] = useRecoilState(questionPage);

  const url = letsCamp.camping.getRecomm(campingCate, animal, keyword)

  return (
    <div className="App">
      <Header />
      <Question />
      <ChoiceButton 
        keyword={keyword}
        setKeyword={setKeyword}
        campingCate={campingCate}
        setCampingCate={setCampingCate}
        animal={animal}
        setAnimal={setAnimal}
      />
      <MoveButton url={url} />
    </div>);

}


export default Questions;