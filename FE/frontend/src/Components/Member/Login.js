import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [user, setUsers] = useState(null);
  const [error, setError] = useState(null);

  function submit() {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
    };
  }
  return (
    <div className="Login">
      <div className="top">
        <span className="back"> &lt; </span>
        <span>로그인</span>
      </div>
      <div>
        <input placeholder="아이디" className="input" />
      </div>
      <div>
        <input placeholder="비밀번호" className="input2" type="password" />
      </div>
      <div>
        <button className="button" onClick={submit}>
          로그인
        </button>
      </div>
      <div className="sub">
        <Link to="/signup">
          <span className="signup">회원가입 </span>
        </Link>
        <span className="findpw">비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default Login;
