import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header.js";
import axios from "axios";
import "./style/SignUp.css";
import { useNavigate } from "react-router-dom";
import LetsCamp from "../api/LetsCamp.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [userId, SetUserId] = useState("");
  const [nickName, SetNickName] = useState("");
  const [address, SetAddress] = useState("");
  const [userPw, SetUserPw] = useState("");
  const [userPw2, SetUserPw2] = useState("");
  const [duCheck, SetDuCheck] = useState(true);
  const [btnAct, SetBtnAct] = useState(false);

  const set = (e) => {
    SetAddress(e.target.value);
  };

  useEffect(() => {
    if (
      userPw === userPw2 &&
      userPw !== "" &&
      duCheck === false &&
      nickName !== "" &&
      address !== ""
    ) {
      SetBtnAct(true);
    } else {
      SetBtnAct(false);
    }
  }, [userPw, userPw2, duCheck, nickName, address]);

  const changeId = (e) => {
    SetUserId(e.target.value);
    SetDuCheck(true);
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
  const changePw2 = (e) => {
    SetUserPw2(e.target.value);
  };

  const check = () => {
    const url = LetsCamp.user.duCheck(userId);
    axios
      .get(url)
      .then(function (response) {
        //true면 중복, false 면 중복 아님
        if (response.data.duplication === true) {
          alert("중복되는 아이디입니다");
        } else {
          SetDuCheck(false);
          alert("사용 가능한 아이디입니다");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submit = () => {
    const url = LetsCamp.user.regist();

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
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
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
          <input
            placeholder="아이디(이메일)"
            className="SignUp-input-id"
            value={userId}
            onChange={changeId}
          />
          <button onClick={check}>중복 체크</button>
          <hr className="SignUp-line" />
        </div>
        <div>
          <input
            placeholder="닉네임"
            className="SignUp-input"
            value={nickName}
            onChange={changeNickName}
          />
          <hr className="SignUp-line" />
        </div>
        <div className="SignUp-address-box">
          <div className="SignUp-address">주소</div>
          <select onChange={set} className="search-searchbyregion-selectbox">
            <option value="서울시" className="search-searchbyregion-select">
              서울시
            </option>
            <option value="인천시" className="search-searchbyregion-select">
              인천시
            </option>
            <option value="대전시" className="search-searchbyregion-select">
              대전시
            </option>
            <option value="세종시" className="search-searchbyregion-select">
              세종시
            </option>
            <option value="광주시" className="search-searchbyregion-select">
              광주시
            </option>
            <option value="대구시" className="search-searchbyregion-select">
              대구시
            </option>
            <option value="울산시" className="search-searchbyregion-select">
              울산시
            </option>
            <option value="부산시" className="search-searchbyregion-select">
              부산시
            </option>
            <option value="강원도" className="search-searchbyregion-select">
              강원도
            </option>
            <option value="경기도" className="search-searchbyregion-select">
              경기도
            </option>
            <option value="경상남도" className="search-searchbyregion-select">
              경상남도
            </option>
            <option value="경상북도" className="search-searchbyregion-select">
              경상북도
            </option>
            <option value="전라남도" className="search-searchbyregion-select">
              전라남도
            </option>
            <option value="전라북도" className="search-searchbyregion-select">
              전라북도
            </option>
            <option value="충청남도" className="search-searchbyregion-select">
              충청남도
            </option>
            <option value="충청북도" className="search-searchbyregion-select">
              충청북도
            </option>
            <option value="제주도" className="search-searchbyregion-select">
              제주도
            </option>
          </select>
        </div>
        <hr className="SignUp-line" />
        <div>
          <input
            placeholder="비밀번호"
            className="SignUp-input"
            type="password"
            value={userPw}
            onChange={changePw}
          />
          <hr className="SignUp-line" />
        </div>
        <div>
          <input
            placeholder="비밀번호 확인"
            className="SignUp-input"
            onChange={changePw2}
            value={userPw2}
            type="password"
          />
          <hr className="SignUp-line" />
        </div>
      </div>
      <div>
        {btnAct === true ? (
          <button
            disabled={false}
            className="SignUp-submit-able"
            onClick={submit}
          >
            회원가입
          </button>
        ) : (
          <button
            disabled={true}
            className="SignUp-submit-disalbe"
            onClick={submit}
          >
            회원가입
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
