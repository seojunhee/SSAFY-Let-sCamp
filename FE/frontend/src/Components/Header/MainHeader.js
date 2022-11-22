import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {

  return (
    <div>
      <div className="header">
        <span
          className="header-hidden"
        >
          ||
        </span>
        <span
          className="header-hidden"
        >
          ||
        </span>
        <Link to={"/"}>
          <div className="img-header">
            <img className="header-img" src="./asset/header.png" alt="자동차 사진"/>
          </div>
        </Link>
        <span
          className="header-hidden"
        >
          ||
        </span>
        <span
          className="header-hidden"
        >
          ||
        </span>
        
      </div>
      <hr className="header-line" />
    </div>
  );
};

export default Header;