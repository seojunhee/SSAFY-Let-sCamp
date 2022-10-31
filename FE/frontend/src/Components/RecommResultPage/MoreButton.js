import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="container">
        <button className="w-btn w-btn-again">다시 추천 받기</button>
        <Link to="/reserve">
          <button className="w-btn w-btn-blue">Let's Camp!</button>
        </Link>
      </div>
      <div>더 알아보기</div>
    </>
  )
};

export default Header;