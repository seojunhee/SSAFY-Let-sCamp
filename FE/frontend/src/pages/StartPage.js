import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="start">
      <div>초보자를 위한 캠핑 추천 서비스</div>
      <div>렛츠 캠프!</div>
      <div>
        <Link to="/question">
          <button>가입 없이 바로 추천받으러 가기 </button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지로가기
        </button>
      </div>
    </div>
  );
};

export default Start;
