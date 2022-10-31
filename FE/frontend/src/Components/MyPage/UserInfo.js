import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/UserInfo.css";

const UserInfo = () => {
  const navigate = useNavigate();

  const User = {
    id: "test@test.com",
    password: "test1234",
    address: "대전광역시 싸피",
    nickname: "김싸피",
  };

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
        {User.nickname}
        <img
          src="/asset/icons/image 7.png"
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
          <div>{User.id}</div>
        </div>
        <div className="userinfo-pw">
          비밀번호
          <div>
            {User.password}
            <img
              src="/asset/icons/image 7.png"
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
            {User.address}{" "}
            <img
              src="/asset/icons/image 7.png"
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
