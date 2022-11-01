import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage } from "../../Store/state";


const ChoiceButton = () => { 
  const [page] = useRecoilState(questionPage);
  const setPage =  useSetRecoilState(questionPage);

  const moveNextPage = () => {
    setPage(page + 1)
  }
  
  const question1 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn" onClick={ moveNextPage }>
        <p>가족</p>
        <img src="." alt="가족"/>
      </div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>
        <p>커플</p>
        <img src="." alt="커플"/>
      </div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>
        <p>친구</p>
        <img src="." alt="친구"/>
      </div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>
        <p>아이들과 함께</p>
        <img src="." alt="아이들"/>
      </div>
    </div>
  )

  const question2 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn" onClick={ moveNextPage }>네</div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>아니요</div>
    </div>
  )

  const question3 = (
    <div className="grid height-55">
      <div className="item col-4 w-btn" onClick={ moveNextPage }>산</div>
      <div className="item col-4 w-btn" onClick={ moveNextPage }>바다</div>
      <div className="item col-4 w-btn" onClick={ moveNextPage }>도심</div>
      <div className="item col-4 w-btn" onClick={ moveNextPage }>숲</div>
      <div className="item col-4 w-btn" onClick={ moveNextPage }>섬</div>
    </div>
  )

  const question4 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn" onClick={ moveNextPage }>텐트</div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>오토캠핑</div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>카라반</div>
      <div className="item col-6 w-btn" onClick={ moveNextPage }>글램핑</div>
    </div>
  )

  const question5 = (
    <div className="height-55">
      <input type="date"/>
    </div>
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