import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {
  const navigate = useNavigate();

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
        <div className="img-header">
          <img claseName="header-img" src="./asset/header.png" alt="자동차 사진"/>
        </div>
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