import React, { useEffect } from "react";
import axios from "axios";
import { userReserveState } from "../../Store/state.js";
import { userState } from "../../Store/state.js";
import { useRecoilState } from "recoil";
import LetsCamp from "../../api/LetsCamp.js";
import "./style/UserReserve.css";

const UserReserve = () => {
  const [userReserve, SetUserReserve] = useRecoilState(userReserveState);
  useEffect(() => {
    const url = LetsCamp.reservation.getReserve();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
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
  });

  return (
    <div className="user-reserve-info">
      <div>유저 예약 정보</div>
    </div>
  );
};

export default UserReserve;
