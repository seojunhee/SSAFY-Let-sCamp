import React from "react";
/*
import { userState } from "../../Store/state.js";
import { useRecoilState } from "recoil";
*/
import { Link } from "react-router-dom";

const SignUp = () => {
  //const [user] = useRecoilState(userState);

  return (
    <div className="SignUp">
      <div>회원가입</div>
      <div>회원정보를 입력해주세요</div>
      <div>
        <input placeholder="아이디(이메일)" />
      </div>
      <div>
        <input placeholder="이름" />
      </div>
      <div>
        <input placeholder="닉네임" />
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
