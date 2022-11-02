import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage, startDate } from "../../Store/state";
import 'react-calendar/dist/Calendar.css';

// Component
import Question6 from "./Question6.js";

// 달력
import Calendar from 'react-calendar';
// import moment from "moment";

const ChoiceButton = () => { 
  const [page] = useRecoilState(questionPage);
  const setPage =  useSetRecoilState(questionPage);

  const [season] = useRecoilState(startDate);
  const setStartDate = useSetRecoilState(startDate);

  const moveNextPage = () => {
    setPage(page + 1)
  }

  const onChangeDate = (e) => {
    const nowMonth = (e[0].getMonth())
    if (nowMonth < 2) {
      setStartDate("겨울")
    } else if (nowMonth < 5) {
      setStartDate("봄")
    } else if (nowMonth < 8) {
      setStartDate("여름")
    } else if (nowMonth < 11) {
      setStartDate("가을")
    } else {
      setStartDate("겨울")
    }
  }
  
  const question1 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>
        <p>가족</p>
        <img src="." alt="가족"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>
        <p>커플</p>
        <img src="." alt="커플"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>
        <p>친구</p>
        <img src="." alt="친구"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>
        <p>아이들과 함께</p>
        <img src="." alt="아이들"/>
      </div>
    </div>
  )

  const question2 = (
    <div className="grid height-271">
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>네</div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>아니요</div>
    </div>
  )

  const question3 = (
    <div className="height-30">
    <div className="grid height-50">
      <div className="item col-4 w-btn outer-div" onClick={ moveNextPage }>산</div>
      <div className="item col-4 w-btn outer-div" onClick={ moveNextPage }>바다</div>
      <div className="item col-4 w-btn outer-div" onClick={ moveNextPage }>도심</div>
    </div>
    <div className="grid height-50">
      <div className="item col-2"></div>
      <div className="item col-4 w-btn outer-div" onClick={ moveNextPage }>숲</div>
      <div className="item col-4 w-btn outer-div" onClick={ moveNextPage }>섬</div>
    </div>
    </div>

  )

  const question4 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>텐트</div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>오토캠핑</div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>카라반</div>
      <div className="item col-6 w-btn outer-div" onClick={ moveNextPage }>글램핑</div>
    </div>
  )

  const question5 = (
    <div>
      <div className="height-55 outer-div">
      <Calendar
        onChange={ onChangeDate }
        selectRange = { true }
        minDate = { new Date() }
        returnValue = {"range"}
      />
      </div>
      
    </div>
    
  )

  const question6 = (
    <Question6 season={season}/>
    
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
    case 5:
      return question5
    case 6:
      return question6
    default:
      return ("잘못된 페이지 요청입니다.")
  }
};

export default ChoiceButton;