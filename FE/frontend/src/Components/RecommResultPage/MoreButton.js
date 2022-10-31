import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="container">
        <button>다시 추천 받기</button>
        <Link to="/reserve">
          <button>Let's Camp!</button>
        </Link>        
      </div>
      <div>더 알아보기</div>
    </>
  )
};

export default Header;