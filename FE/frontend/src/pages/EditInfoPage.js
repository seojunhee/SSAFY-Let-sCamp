import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header.js";
import LetsCamp from "../api/LetsCamp.js";

import { useRecoilState } from "recoil";
import { userState } from "../Store/state.js";
import "./style/EditInfoPage.css";

const EditInfoPage = () => {
  const navigate = useNavigate();
  const [nickName, SetNickName] = useState("");
  const [address, SetAddress] = useState("");
  const [userPw, SetUserPw] = useState("");
  const [userPw2, SetUserPw2] = useState("");
  const [btnAct, SetBtnAct] = useState(false);
  const [userData, SetUser] = useRecoilState(userState);

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

  /*
  useEffect(() => {
    if (
      userPw === userPw2 &&
      userPw !== "" &&
      nickName !== "" &&
      address !== ""
    ) {
      SetBtnAct(true);
    }
  }, []);
  */

  const url = LetsCamp.user.update();
  const submit = () => {
    axios
      .put(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
        address: address,
        id: userData.id,
        nickName: nickName,
        userPw: userPw,
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
    <div className="editinfo">
      <Header pageName={"회원정보 수정"}></Header>
      <div className="editinfo-subtitle-box">
        <div className="editinfo-subtitle">회원정보를 수정해주세요</div>
      </div>
      <div className="editinfo-input-box">
        <div>
          <input
            placeholder={userData.userId}
            className="editinfo-input"
            disabled
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder={userData.nickName}
            className="editinfo-input"
            onChange={changeNickName}
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder={userData.address}
            className="editinfo-input"
            onChange={changeAddress}
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder="******"
            className="editinfo-input"
            type="password"
            onChange={changePw}
          />
          <hr className="editinfo-underline" />
        </div>
        <div>
          <input
            placeholder="******"
            className="editinfo-input"
            type="password"
            onChange={changePw2}
          />
          <hr className="editinfo-underline" />
        </div>
      </div>
      <div>
        <button className="editinfo-submit" onClick={submit}>
          변경
        </button>
      </div>
    </div>
  );
};

export default EditInfoPage;
