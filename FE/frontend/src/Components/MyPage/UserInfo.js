import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/UserInfo.css";

const UserInfo = (userData) => {
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const Profile = (userData) => {
    if (userData.userData.userData.exp < 500) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/camlin.png"
            alt="캠린"
            className="userinfo-img"
          ></img>
          <div className="userinfo-userstate">캠린이</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 500) * 100 + "%",
              }}
            ></div>
            <div className="userinfo-exptext">
              {userData.userData.userData.exp} / 500
            </div>
          </div>
        </div>
      );
    } else if (
      userData.userData.userData.exp >= 500 &&
      userData.userData.userData.exp < 1500
    ) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/camding.png"
            alt="캠딩"
            className="userinfo-img"
          ></img>
          <div className="userinfo-userstate">캠딩</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 1500) * 100 + "%",
                height: 100 + "%",
              }}
            ></div>
            <div className="userinfo-exptext">
              {userData.userData.userData.exp} / 1500
            </div>
          </div>
        </div>
      );
    } else if (
      userData.userData.userData.exp >= 1500 &&
      userData.userData.userData.exp < 4000
    ) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/camdeahak.png"
            alt="캠대학생"
            className="userinfo-img"
          ></img>
          <div className="userinfo-userstate">캠대학생</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 4000) * 100 + "%",
                height: 100 + "%",
              }}
            ></div>
            <div className="userinfo-exptext">
              {userData.userData.userData.exp} / 4000
            </div>
          </div>
        </div>
      );
    } else if (
      userData.userData.userData.exp >= 4000 &&
      userData.userData.userData.exp < 10000
    ) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/camdeahakone.png"
            alt="캠대학원생"
            className="userinfo-img"
          ></img>
          <div className="userinfo-userstate">캠대학원생</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 10000) * 100 + "%",
                height: 100 + "%",
              }}
            ></div>
            <div className="userinfo-exptext">
              {userData.userData.userData.exp} / 10000
            </div>
          </div>
        </div>
      );
    } else if (userData.userData.userData.exp > 10000) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/cambaksa.png"
            alt="캠박사"
            className="userinfo-img"
          ></img>
          <div className="userinfo-userstate">캠박사</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: 100 + "%",
                height: 100 + "%",
              }}
            ></div>
            <div className="userinfo-exptext">
              {userData.userData.userData.exp} / &infin;
            </div>
          </div>
        </div>
      );
    } else {
      return <div>경험치 정보가 없습니다.</div>;
    }
  };

  return (
    <div className="userinfo">
      <Profile userData={userData}></Profile>
      <div className="userinfo-info">
        <div className="userinfo-id">
          <div>아이디</div>
          <div>{userData.userData.userId}</div>
        </div>
        <div className="userinfo-pw">
          닉네임
          <div>{userData.userData.nickName}</div>
        </div>
        <div className="userinfo-address">
          주소
          <div>{userData.userData.address}</div>
        </div>
        <div className="userinfo-btnbox">
          <button
            onClick={() => {
              navigate("/editinfo");
            }}
            className="userinfo-editinfobtn"
          >
            회원정보 수정
          </button>
          <button
            onClick={() => {
              Logout();
            }}
            className="userinfo-logoutbtn"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
