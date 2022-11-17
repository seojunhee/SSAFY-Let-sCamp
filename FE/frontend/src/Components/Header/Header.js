import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="header-back">
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            &lt;
          </span>
        </div>
        <span
          className="header-hidden"
        >
          ||
        </span>
        <div className="img-header">
          <img claseName="header-img" src="./asset/logo.png" alt="자동차 사진"/>
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
