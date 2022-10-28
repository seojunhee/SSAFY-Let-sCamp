import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/UserInfo.css";

const UserInfo = () => {
  const navigate = useNavigate();

  const User = {
    id: "test",
    password: "test1234",
    address: "대전광역시 싸피",
    nickname: "김싸피",
  };

  return (
    <div className="userinfo">
      <div>
        <img className="userinfo-img" src="" alt="프로필사진" />
      </div>
      <div className="userinfo-nickname">{User.nickname}</div>
      <div className="userinfo-info">
        <div className="userinfo-id">
          <div>아이디</div>
          <div>
            {User.id}{" "}
            <button
              onClick={() => {
                navigate("/editinfo");
              }}
            >
              변경하기
            </button>
          </div>
        </div>
        <div className="userinfo-pw">
          비밀번호
          <div>
            {User.password}{" "}
            <button
              onClick={() => {
                navigate("/editinfo");
              }}
            >
              변경하기
            </button>
          </div>
        </div>
        <div className="userinfo-address">
          주소
          <div>
            {User.address}{" "}
            <button
              onClick={() => {
                navigate("/editinfo");
              }}
            >
              변경하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
