import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage } from "../../Store/state";
import 'react-calendar/dist/Calendar.css';
import './style/QuestionButton.css'

// 달력
import Calendar from 'react-calendar';
// import moment from "moment";

const ChoiceButton = (props) => {
  // /api/camping/recomm/일반야영장/동반/아이들과놀기좋은 가족 바다가보이는 여름물놀이 낚시
  // const toggleClass = (idx) => {
  //   !isActive[idx] ? (isActive[idx] = 1) : (isActive[idx] = 0);
  //   console.log(isActive);
  // };
  
  const [q1Img, setQ1Img] = useState("question");
  const [q2Img, setQ2Img] = useState("question");
  const [q3Img, setQ3Img] = useState("question")
  const [q4Img, setQ4Img] = useState("question")

  const [page] = useRecoilState(questionPage);
  // const setPage = useSetRecoilState(questionPage);

  const onChangeIsActive = (idx) => {
    let tmp = [...props.isActive];
    !tmp[idx] ?(tmp[idx] = 1) : (tmp[idx] = 0);
    props.setIsActive(tmp);
  }

  
  // const moveNextPage = () => {
  //   setPage(page + 1)
  // }

  const onChangeDate = (e) => {
    const nowMonth = (e.getMonth())
    if (nowMonth < 2) {
      props.setSeason("겨울")
    } else if (nowMonth < 5) {
      props.setSeason("봄")
    } else if (nowMonth < 8) {
      props.setSeason("여름")
    } else if (nowMonth < 11) {
      props.setSeason("가을")
    } else {
      props.setSeason("겨울")
    }
  }
  
  const onChangePet = (e) => {
    if (e) {
      setQ2Img("withPet")
      props.setAnimal("동반");
    } else {
      setQ2Img("noPet")
      props.setAnimal("비동반");
    }
  }
  useEffect(() => {
    console.log(props.url);
  }, [props.animal, props.campingCate, props.keyword, props.season]);

  const onChangeKeyword = (e) => {

    switch (e){
      case "가족":
        setQ1Img("family")
        break
      case "커플":
        setQ1Img("couple")
        break
      default:
        setQ1Img("child")

    }
    props.setKeyword(e + " ")
    return
  }

  const onChangePlace = (e) => {
    switch (e){
      case "산":
        setQ3Img("mountain")
        break
      case "바다가보이는":
        setQ3Img("sea")
        break
      case "도심":
        setQ3Img("city")
        break
      case "숲":
        setQ3Img("forest")
        break
      case "섬":
        setQ3Img("island")
        break
      default:
        return

    }
    props.setPlace(e)
    return
  }

  const onChangeCate = (e) => {
    switch (e){
      case "일반야영장":
        setQ4Img("camping")
        break
      case "자동차야영장":
        setQ4Img("autoCamping")
        break
      case "글램핑":
        setQ4Img("glamping")
        break
      case "카라반":
        setQ4Img("caravan")
        break
      default:
        return

    }
    props.setCampingCate(e)
    return
  }

  const question1 = (
    <>
      <div className={"height-40"}>
        <img src={"/img/" + q1Img +".png"} className={"height-100"}/>
      </div>
      <div className={"grid height-15"}>
        <div className={"item col-4 w-btn text-center" + ((q1Img==="family") ? " choice-btn" : "")} onClick={ () => onChangeKeyword("가족") }>
          가족
        </div>
        <div className={"item col-4 w-btn text-center" + ((q1Img==="couple") ? " choice-btn" : "")} onClick={ () => onChangeKeyword("커플") }>
          커플
        </div>
        <div className={"item col-4 w-btn text-center" + ((q1Img==="child") ? " choice-btn" : "")} onClick={ () => onChangeKeyword("아이들놀기좋은") }>
          아이들
        </div>
      </div>
    </>
  )

  const question2 = (
    <>
      <div className={"height-40"}>
        <img src={"/img/" + q2Img +".png"} className="height-100"/>
      </div>
      <div className={"grid height-15"}>
        <div className={"item col-6 w-btn outer-div" + (!!(q2Img === "withPet") ? " choice-btn" : "")} onClick={ () => onChangePet(true) }>네</div>
        <div className={"item col-6 w-btn outer-div" + (!!(q2Img === "noPet") ? " choice-btn" : "")} onClick={ () => onChangePet(false) }>아니요</div>
      </div>
    </>
  )

  const question3 = (
    <>
      <div className={"height-40"}>
        <img src={"/img/" + q3Img +".png"} className={"height-100"}/>
      </div>
      <div className={"height-15"}>
        <div className={"grid"}>
          <div className={"item col-4 w-btn outer-div" + (!!(q3Img === "mountain") ? " choice-btn" : "")} onClick={ () => onChangePlace("산") }>산</div>
          <div className={"item col-4 w-btn outer-div" + (!!(q3Img === "sea") ? " choice-btn" : "")} onClick={ () => onChangePlace("바다가보이는") }>바다</div>
          <div className={"item col-4 w-btn outer-div" + (!!(q3Img === "city") ? " choice-btn" : "")} onClick={ () => onChangePlace("도심") }>도심</div>
          <div className={"item col-2"}></div>
          <div className={"item col-4 w-btn outer-div" + (!!(q3Img === "forest") ? " choice-btn" : "")} onClick={ () => onChangePlace("숲") }>숲</div>
          <div className={"item col-4 w-btn outer-div" + (!!(q3Img === "island") ? " choice-btn" : "")} onClick={ () => onChangePlace("섬") }>섬</div>
        </div>
      </div>
    </>

  )

  const question4 = (
    <>
      <div className={"height-40"}>
        <img src={"/img/" + q4Img +".png"} className={"height-100"}/>

      </div>
      <div className={"grid height-15"}>
        <div className={"item col-6 w-btn outer-div" + (!!(q4Img === "camping") ? " choice-btn" : "")} onClick={ () => onChangeCate("일반야영장") }>텐트</div>
        <div className={"item col-6 w-btn outer-div" + (!!(q4Img === "autoCamping") ? " choice-btn" : "")} onClick={ () => onChangeCate("자동차야영장") }>오토캠핑</div>
        <div className={"item col-6 w-btn outer-div" + (!!(q4Img === "caravan") ? " choice-btn" : "")} onClick={ () => onChangeCate("카라반") }>카라반</div>
        <div className={"item col-6 w-btn outer-div" + (!!(q4Img === "glamping") ? " choice-btn" : "")} onClick={ () => onChangeCate("글램핑") }>글램핑</div>
      </div>
    </>
  )

  const question5 = (
    <div>
      <div className={"height-55 question5-6"}>
        <Calendar
          calendarType="US"
          onChange={ onChangeDate }
          // selectRange = { true }
          minDate = { new Date() }
          // returnValue = {"range"}
        />
      </div>
      
    </div>
    
  )

  const question6 = ( season ) => {
    // const seasonList = campSeason(season);
    return (
      <div className={"tag-div"}>
        <>
          {
            props.allSeasonList[season].map((tag, idx) => {
              return (
                <button
                  key={idx}
                  className={ "div-inline tag-btn tag-content" }
                  onClick={ () => onChangeIsActive(idx) }
                  style={{ backgroundColor: props.isActive[idx] ? "#35C2BD" : "white" }}
                >
                  { tag }
                </button>
              )
            })
          }
        </>
      </div>
    )
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
      return question6(props.season)
    default:
      return ("잘못된 페이지 요청입니다.")
  }
};

export default ChoiceButton;