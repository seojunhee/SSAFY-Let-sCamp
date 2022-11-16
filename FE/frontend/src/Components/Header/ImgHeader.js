import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { questionPage } from "../../Store/state";
import { Link } from "react-router-dom";

// css
import './Header.css'

const Header = () => {
  const setPage =  useSetRecoilState(questionPage);

  const resetPage = () => {
    setPage(1)
  }
  return (
    <div>
      <Link to='/'>
        <div className="img-header">
            <img claseName="header-img" src="./asset/logo.png" alt="자동차 사진" onClick={resetPage}/>
        </div>
      </Link>
    </div>
  )
};

export default Header;