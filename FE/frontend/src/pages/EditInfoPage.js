import React from "react";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { pageNameState } from "../Store/state";
import Header from "../Components/Header/Header.js";

const EditInfoPage = () => {
  const setPageName = useSetRecoilState(pageNameState);

  setPageName("회원정보 수정");

  return (
    <div className="SignUp">
      <Header></Header>
      <hr />
      <div>회원정보를 수정해주세요</div>
      <div>
        <input placeholder="아이디(이메일) 수정불가" />
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
          <button>변경</button>
        </Link>
      </div>
    </div>
  );
};

export default EditInfoPage;
