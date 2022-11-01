import React, { useState } from "react";
import Header from "../Components/Header/Header.js";
import axios from "axios";
import "./style/SignUp.css";

const SignUp = () => {
  const [userId, SetUserId] = useState("");
  const [nickName, SetNickName] = useState("");
  const [address, SetAddress] = useState("");
  const [userPw, SetUserPw] = useState("");

  const changeId = (e) => {
    SetUserId(e.target.value);
  };
  const changeNickName = (e) => {
    SetNickName(e.target.value);
  };
  const changeAddress = (e) => {
    SetAddress(e.target.value);
  };
  const changePw = (e) => {
    SetUserPw(e.target.value);
  };

  const url = "https://k7b308.p.ssafy.io/api/user/regist";
  const submit = () => {
    const user = {
      address: address,
      exp: 0,
      nickName: nickName,
      userId: userId,
      userPw: userPw,
    };
    console.log(user);

    axios
      .post(url, {
        address: address,
        exp: 0,
        nickName: nickName,
        userId: userId,
        userPw: userPw,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("성공");
        console.log(response);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  };

  return (
    <div className="SignUp">
      <Header pageName={"회원가입"}></Header>
      <div className="SignUp-subtitle-box">
        <div className="SignUp-subtitle">회원정보를 입력해주세요</div>
      </div>
      <div className="SignUp-input-box">
        <div>
          <input placeholder="아이디(이메일)" className="SignUp-input" value={userId} onChange={changeId} />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="닉네임" className="SignUp-input" value={nickName} onChange={changeNickName} />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="주소" className="SignUp-input" value={address} onChange={changeAddress} />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="비밀번호" className="SignUp-input" type="password" value={userPw} onChange={changePw} />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input placeholder="비밀번호 확인" className="SignUp-input" type="password" />
          <hr className="SignUp-line" />
        </div>
      </div>
      <div>
        <button className="SignUp-submit" onClick={submit}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
