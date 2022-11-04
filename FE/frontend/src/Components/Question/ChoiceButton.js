import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage } from "../../Store/state";
import 'react-calendar/dist/Calendar.css';

// 달력
import Calendar from 'react-calendar';
// import moment from "moment";

const ChoiceButton = (props) => {
  // /api/camping/recomm/일반야영장/동반/아이들과놀기좋은 가족 바다가보이는 여름물놀이 낚시
  // const toggleClass = (idx) => {
  //   !isActive[idx] ? (isActive[idx] = 1) : (isActive[idx] = 0);
  //   console.log(isActive);
  // };
  
  

  const [page] = useRecoilState(questionPage);
  const setPage = useSetRecoilState(questionPage);

  // navigate("/somepage", {
  //   state: {
  //     buttons: ["1", "2"]
  //   }
  // })

  // const campSeason = (e) => {
  //   switch (e) {
  //     case "봄":
  //       return springList
  //     case "여름":
  //       return summerList
  //     case "가을":
  //       return fallList
  //     case "겨울":
  //       return winterList
  //     default:
  //       return []
  //   }
  // }
  
  // const [isActive, setIsActive] = useState(props.allSeasonList[props.season].map((n) => 0));

  const onChangeIsActive = (idx) => {
    let tmp = [...props.isActive];
    !tmp[idx] ?(tmp[idx] = 1) : (tmp[idx] = 0);
    props.setIsActive(tmp);
  }

  
  const moveNextPage = () => {
    setPage(page + 1)
  }

  const onChangeDate = (e) => {
    const nowMonth = (e[0].getMonth())
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
    moveNextPage();
    if (e) {
      props.setAnimal("동반");
    } else {
      props.setAnimal("비동반");
    }
  }
  useEffect(() => {
    console.log(props.url);
  }, [props.animal, props.campingCate, props.keyword, props.season]);

  const onChangeKeyword = (e) => {
    moveNextPage();
    props.setKeyword(props.keyword + e + " ")
    return
  }

  const onChangeCate = (e) => {
    moveNextPage();
    props.setCampingCate(e)
    return
  }

  const question1 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeKeyword("가족") }>
        <p>가족</p>
        <img src="." alt="가족"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeKeyword("커플") }>
        <p>커플</p>
        <img src="." alt="커플"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeKeyword("친구") }>
        <p>친구</p>
        <img src="." alt="친구"/>
      </div>
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeKeyword("아이들놀기좋은") }>
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
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangeKeyword("산") }>산</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangeKeyword("바다가보이는") }>바다</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangeKeyword("도심") }>도심</div>
    </div>
    <div className="grid height-50">
      <div className="item col-2"></div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangeKeyword("숲") }>숲</div>
      <div className="item col-4 w-btn outer-div" onClick={ () => onChangeKeyword("섬") }>섬</div>
    </div>
    </div>

  )

  const question4 = (
    <div className="grid height-55">
      <div className="item col-6 w-btn outer-div" onClick={ () => onChangeCate("일반야영장") }>텐트</div>
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
    // const seasonList = campSeason(season);
    return (
      <div className="tag-div">
        {
          props.allSeasonList[season].map((tag, idx) => {
            return (
              <button
                key={idx}
                className={ "div-inline tag-btn tag-content" }
                onClick={ () => onChangeIsActive(idx) }
                style={{ backgroundColor: props.isActive[idx] ? "green" : "white" }}
              >
                { tag }
              </button>
            )
          })
        }
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