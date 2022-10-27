import React from "react";
import { Link } from "react-router-dom";

const SignUpSucess = () => {
  return (
    <div>
      <div>회원가입이 완료되었습니다.</div>
      <div>
        <Link to="/login">
          <button>로그인으로</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpSucess;
