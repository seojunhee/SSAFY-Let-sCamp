import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage, startDate, withPet, withWho, campPlace, campingCate } from "../../Store/state";
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

  const [pet] = useRecoilState(withPet);
  const setPet = useSetRecoilState(withPet);

  const [who] = useRecoilState(withWho);
  const setWho = useSetRecoilState(withWho);

  const [place] = useRecoilState(campPlace);
  const setPlace = useSetRecoilState(campPlace);

  const [cate] = useRecoilState(campingCate);
  const setCate = useSetRecoilState(campingCate);

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
  
  const onChangePet = (e) => {
    moveNextPage();
    if (e) {
      setPet("동반");
    } else {
      setPet("비동반")
    }
  }

  const onChangeWho = (e) => {
    moveNextPage();
    setWho(e);
    return
  }

  const onChangePlace = (e) => {
    moveNextPage();
    setPlace(e);
    return
  }

  const onChangeCate = (e) => {
    moveNextPage();
    setCate(e);
    return
  }

  const question1 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeWho("가족") }>
        <p>가족</p>
        <img src="." alt="가족"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeWho("커플") }>
        <p>커플</p>
        <img src="." alt="커플"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeWho("친구") }>
        <p>친구</p>
        <img src="." alt="친구"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeWho("아이들놀기좋은") }>
        <p>아이들과 함께</p>
        <img src="." alt="아이들"/>
      </div>
    </div>
  )

  const question2 = (
    <div className="grid height-271">
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangePet(true) }>네</div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangePet(false) }>아니요</div>
    </div>
  )

  const question3 = (
    <div className="height-30">
    <div className="grid height-50">
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangePlace("산") }>산</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangePlace("바다") }>바다</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangePlace("도심") }>도심</div>
    </div>
    <div className="grid height-50">
      <div className="item col-2"></div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangePlace("숲") }>숲</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangePlace("섬") }>섬</div>
    </div>
    </div>

  )

  const question4 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeCate("텐트") }>텐트</div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeCate("오토캠핑") }>오토캠핑</div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeCate("카라반") }>카라반</div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeCate("글램핑") }>글램핑</div>
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

  const question6 = ( season ) => {
    switch (season){
      case "봄":
        return 
      case "여름":
        return
      case "가을":
        return (
          <div className="tag-div">
            <div className="div-inline w-btn tag-content">
              가을단풍명소
            </div>
            <div className="div-inline w-btn tag-content">
              일출명소
            </div>
            <div className="div-inline w-btn tag-content">
              일몰명소  
            </div>
            <div className="div-inline w-btn tag-content">
              낚시
            </div>
            <div className="div-inline w-btn tag-content">
              걷기길
            </div>
            <div className="div-inline w-btn tag-content">
              항공레저
            </div>
            <div className="div-inline w-btn tag-content">
              액티비티
            </div>
          </div>
        )
      default:
        return
    }
  }


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
      return question6(season)
    default:
      return ("잘못된 페이지 요청입니다.")
  }
};

export default ChoiceButton;