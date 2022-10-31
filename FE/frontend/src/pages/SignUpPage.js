import React from "react";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { pageNameState } from "../Store/state";
import Header from "../Components/Header/Header.js";

const SignUp = () => {
  const setPageName = useSetRecoilState(pageNameState);

  setPageName("회원가입");

  return (
    <div className="SignUp">
      <Header></Header>
      <div>회원정보를 입력해주세요</div>
      <div>
        <input placeholder="아이디(이메일)" />
      </div>
      <div>
        <input placeholder="닉네임" />
      </div>
      <div>
        <input placeholder="주소" />
      </div>
      <div>
        <input placeholder="비밀번호" />
      </div>
      <div>
        <input placeholder="비밀번호 확인" />
      </div>
      <div>
        <Link to="/signupsucess">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
