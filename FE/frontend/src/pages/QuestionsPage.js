import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// Components
import Header from "../Components/Header/Header.js";
import MoveButton from "../Components/Question/MoveButton.js";
import ChoiceButton from "../Components/Question/ChoiceButton.js";
import Question from "../Components/Question/Question.js";
import Loading from "../Components/Question/Loading.js";
import NavBar from "../Components/NavBar/NavBar.js"

// api
import letsCamp from "../api/LetsCamp";

// data
// import { useRecoilState } from "recoil";
// import { questionPage } from "../Store/state.js";

// css
import "../App.css"
import "./style/Button.css"
import "./style/QuestionPage.css"

const Questions = () => {
  const springList = ["꽃여행", "일출명소", "낚시", "걷기길", "항공레저", "액티비티", "체험"]
  const summerList = ["수상레저", "물놀이", "일출명소", "일몰명소", "낚시", "걷기길", "항공레저", "액티비티", "체험"]
  const fallList = ["단풍명소", "일출명소", "일몰명소", "낚시", "걷기길", "항공레저", "액티비티", "체험"]
  const winterList = ["눈꽃명소", "스키", "일출명소", "일몰명소", "낚시", "걷기길", "항공레저", "액티비티", "체험"]
  const allSeasonList = {"": [], "봄": springList, "여름": summerList, "가을": fallList, "겨울": winterList}

  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [campingCate, setCampingCate] = useState("");
  const [animal, setAnimal] = useState("");
  const [season, setSeason] = useState("");
  const [place, setPlace] = useState("");
  const [isActive, setIsActive] = useState(allSeasonList[season].map((n) => 0));
  // 페이지를 구분할 변수가 필요하고
  // 페이지에 따라 ChoiceButton과 Question, MoveButton의 변화가 필요하다.
  // const [page] = useRecoilState(questionPage);

  const url = letsCamp.camping.getRecomm(campingCate, animal, keyword)

  return (
    <div className={"page"}>
      {loading ? <Loading />: null}
      <Header />
      <Question />
      <ChoiceButton 
        keyword={keyword}
        setKeyword={setKeyword}
        place={place}
        setPlace={setPlace}
        campingCate={campingCate}
        setCampingCate={setCampingCate}
        animal={animal}
        setAnimal={setAnimal}
        season={season}
        setSeason={setSeason}
        url={url}
        allSeasonList={allSeasonList}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <MoveButton
        url={url}
        loading={loading}
        setLoading={setLoading}
        keyword={keyword}
        setKeyword={setKeyword}
        place={place}
        campingCate={campingCate}
        season={season}
        animal={animal}
        setSeason={setSeason}
        allSeasonList={allSeasonList}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <NavBar/>

    </div>);

}


export default Questions;