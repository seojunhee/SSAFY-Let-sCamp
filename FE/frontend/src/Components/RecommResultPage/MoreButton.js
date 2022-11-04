import React from "react";

import { Link } from "react-router-dom";

//css
import "./style/MoreButton.css"
const Header = (props) => {

  const changeIdx = () => {
    props.setListIdx((props.listIdx + 1) % props.numberOfCampSite)
  }

  return (
    <>
      <div className="container">
        <button onClick={ changeIdx } className="w-btn w-btn-again">다시 추천 받기</button>
        <Link to="/reserve">
          <button className="w-btn w-btn-blue">Let's Camp!</button>
        </Link>
      </div>
      {/* 모달 적용해서 띄우기 */}
      <div className="more container">더 알아보기</div>
    </>
  )
};

export default Header;