import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <div className="img-header">
            <img claseName="header-img" src="./asset/logo.png" alt="자동차 사진" />
        </div>
      </Link>
    </div>
  )
};

export default Header;