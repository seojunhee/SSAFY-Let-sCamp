import React, {useEffect} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { questionPage } from "../../Store/state";

// css
import "./style/QuestionButton.css"

const MoveButton = (props) => {
  const [page] = useRecoilState(questionPage);
  const setPage =  useSetRecoilState(questionPage);
  const navigate = useNavigate();
  const moveNextPage = () => {
    setPage(page + 1)
    switch (page){
      case 3:
        props.setKeyword(props.keyword + props.place + " ")
        return
    }
  }
  const movePrePage = () => {
    setPage(page - 1)
    props.setSeason("")
    props.setIsActive([])
  }
  const resetPage = () => {
    setPage(1)
    props.setSeason("")
    props.setIsActive([])
  }

  const nextBtnState = (p) => {
    switch (p){
      case 1:
        return !(props.keyword)? false: true
      case 2:
        return !(props.animal)? false: true
      case 3:
        return !(props.place)? false: true
      case 4:
        return !(props.campingCate)? false: true
      default:
        return true
    }
  }

  const choiceButtonState = () => {
    return !!(props.season) ? true : false
  }


  const submitAnswer = () => {
    let tagKeyword = ""
    props.setKeyword(props.keyword + props.season + " ")
    // console.log(props.isActive)
    // console.log(props.season)
    props.isActive.map((n, idx) => !!n ? tagKeyword = tagKeyword + props.allSeasonList[props.season][idx] + " ": null)
    props.setKeyword(props.keyword + tagKeyword)
    console.log(props.url)
    props.setLoading(true)
    axios
      .get(props.url)
      .then(function (response) {
        console.log(response.data)
        navigate("/recommend", {state: {"data": response.data}});
        resetPage()
      })
    
    
  }
  // useEffect(() => {
  //   console.log(props.url);
  // }, [props.animal, props.campingCate, props.keyword, props.season]);

  const choiceButton = (
    <button className="item col-2 w-btn" onClick={ moveNextPage } disabled={!!(choiceButtonState())? false: true}>선택</button>
  )
  const submitButton = (

    <button className="item col-2 w-btn" onClick={ submitAnswer }>제출</button>

  )
  return (
    <>
      <div className="outer-div width-100">
      
        {(<button className={"w-btn " + (!!(page > 1) ? "": "hidden-btn")} onClick={ movePrePage }>이전</button>)}
        <Link to="/">
          <button className="w-btn" onClick={ resetPage }>홈으로</button>
        </Link>
        {page > 0 && page < 5 && (<button className="w-btn" onClick={moveNextPage} disabled={!!(nextBtnState(page))? false: true}>다음</button>)}
        {page === 5 && choiceButton}
        {page === 6 && submitButton}
      </div>
    </>
  )
};
// 다음을 누를 때마다 페이지 변수가 늘어나고 그 변수에 따라 화면이 바뀐다.
// 홈으로를 누르면 로그인을 했는지 안 했는지에 따라 시작화면, 홈화면으로 이동한다.
// 이전을 누르면 페이지 변수가 줄어들고 그 변수에 따라 화면이 바뀐다.
export default MoveButton;