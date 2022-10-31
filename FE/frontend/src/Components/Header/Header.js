import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <span
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          &lt;
        </span>
        <span>{pageName}</span>
      </div>
    </div>
  );
};

export default Header;
