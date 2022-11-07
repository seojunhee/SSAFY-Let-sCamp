import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style/UserInfo.css";

const UserInfo = (userData) => {
  const navigate = useNavigate();

  return (
    <div className="userinfo">
      <div className="userinfo-img-box">
        <img
          className="userinfo-img"
          src="/asset/campingcar.png"
          alt="프로필사진"
        />
      </div>
      <div className="userinfo-nickname">
        {userData.userData.nickName}
        <img
          src="/asset/icons/image7.png"
          alt="이미지"
          className="userinfo-pencilimg"
          onClick={() => {
            navigate("/editinfo");
          }}
        ></img>
      </div>
      <div className="userinfo-info">
        <div className="userinfo-id">
          <div>아이디</div>
          <div>{userData.userData.userId}</div>
        </div>
        <div className="userinfo-pw">
          비밀번호
          <div>
            ******
            <img
              src="/asset/icons/image7.png"
              alt="이미지"
              className="userinfo-pencilimg"
              onClick={() => {
                navigate("/editinfo");
              }}
            ></img>
          </div>
        </div>
        <div className="userinfo-address">
          주소
          <div>
            {userData.userData.address}{" "}
            <img
              src="/asset/icons/image7.png"
              alt="이미지"
              className="userinfo-pencilimg"
              onClick={() => {
                navigate("/editinfo");
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
