import React from "react";

const UserLevel = () => {
  const Profile = (userData) => {
    if (userData.userData.userData.exp < 500) {
      return (
        <div className="userinfo-img-box">
          <img
            src="/asset/profile/camlin.png"
            alt="캠린"
            className="userinfo-img"
          ></img>
          <div>캠린이</div>
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
          <div>캠딩</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 1500) * 100 + "%",
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
          <div>캠대학생</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 4000) * 100 + "%",
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
          <div>캠대학원생</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: (userData.userData.userData.exp / 10000) * 100 + "%",
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
          <div>캠박사</div>
          <div className="userinfo-expbar">
            <div
              className="userinfo-exp"
              style={{
                width: 100 + "%",
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
    <div className="">
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
};

export default UserLevel;
