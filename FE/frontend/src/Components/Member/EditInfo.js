import React from "react";

const EditInfo = () => {
  return (
    <div className="SignUp">
      <div>회원정보 수정</div>
      <div>회원정보를 수정해주세요</div>
      <div>
        <input placeholder="아이디(이메일) 변경불가" />
      </div>
      <div>
        <input placeholder="이름" />
      </div>
      <div>
        <input placeholder="닉네임" />
      </div>
      <div>
        <input placeholder="비밀번호" />
      </div>
      <div>
        <input placeholder="비밀번호 확인" />
      </div>
      <div>
        <button>변경</button>
      </div>
    </div>
  );
};

export default EditInfo;
