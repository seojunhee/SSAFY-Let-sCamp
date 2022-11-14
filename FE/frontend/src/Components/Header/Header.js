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
        <div className="header-pagename">
          <span className="">{pageName}</span>
        </div>
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
