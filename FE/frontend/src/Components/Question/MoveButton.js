import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { questionPage } from "../../Store/state";

// css
import "./style/QuestionButton.css"

const MoveButton = () => {
  const [page] = useRecoilState(questionPage);
  const setPage =  useSetRecoilState(questionPage);

  const moveNextPage = () => {
    setPage(page + 1)
  }

  const movePrePage = () => {
    setPage(page - 1)
  }
  const resetPage = () => {
    setPage(1)
  }
  const choiceButton = (
    <button className="item col-2 w-btn" onClick={ moveNextPage }>선택</button>
  )
  const submitButton = (
    <Link to="/recommend">
      <button className="item col-2 w-btn" onClick={resetPage}>제출</button>
    </Link>
  )
  return (
    <>
      <div className="position-bottom outer-div width-100">
      
        {page > 1 && (<button className="w-btn" onClick={ movePrePage }>이전</button>)}
        <Link to="/">
          <button className="w-btn" onClick={ resetPage }>홈으로</button>
        </Link>
        {page > 1 && page < 5 && (<button className="w-btn hidden-btn" >다음</button>)}
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