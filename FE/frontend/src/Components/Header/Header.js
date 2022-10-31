import React from "react";
import { useNavigate } from "react-router-dom";
import { pageNameState } from "../../Store/state.js";
import { useRecoilState } from "recoil";

const Header = () => {
  const navigate = useNavigate();
  const [pageName] = useRecoilState(pageNameState);

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
