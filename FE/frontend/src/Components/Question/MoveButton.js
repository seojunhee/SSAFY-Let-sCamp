import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { questionPage } from "../../Store/state";

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
  const submitButton = (
    <Link>
      <button>제출</button>
    </Link>
  )
  return (
    <>
      <div className="container">
        {page > 1 && (<button onClick={ movePrePage }>이전</button>)}
        <Link to="/">
          <button onClick={ resetPage }>홈으로</button>
        </Link>
        
        {page < 5 && <button onClick={ moveNextPage }>다음</button>}
        {page === 5 && submitButton}
      </div>
    </>
  )
};
// 다음을 누를 때마다 페이지 변수가 늘어나고 그 변수에 따라 화면이 바뀐다.
// 홈으로를 누르면 로그인을 했는지 안 했는지에 따라 시작화면, 홈화면으로 이동한다.
// 이전을 누르면 페이지 변수가 줄어들고 그 변수에 따라 화면이 바뀐다.
export default MoveButton;