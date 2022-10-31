import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <span
          className="header-back"
          onClick={() => {
            navigate(-1);
          }}
        >
          &lt;
        </span>
        <span className="header-pagename">{pageName}</span>
      </div>
      <hr className="header-line" />
    </div>
  );
};

export default Header;
