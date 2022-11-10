import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import CampingList from "./CampingList.js";
import "./style/SearchByRegion.css";

const SearchByRegion = () => {
  const [region, SetRegion] = useState();
  const [CampingListData, SetCampingList] = useState();

  const search = () => {
    const url = LetsCamp.camping.searchByDoSi(region);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
        SetCampingList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const set = (e) => {
    SetRegion(e.target.value);
  };

  return (
    <div className="searchbyregion">
      <select onChange={set} className="searchbyregion-selectbox">
        <option value="서울시" className="searchbyregion-select">
          서울시
        </option>
        <option value="인천시" className="searchbyregion-select">
          인천시
        </option>
        <option value="대전시" className="searchbyregion-select">
          대전시
        </option>
        <option value="세종시" className="searchbyregion-select">
          세종시
        </option>
        <option value="광주시" className="searchbyregion-select">
          광주시
        </option>
        <option value="대구시" className="searchbyregion-select">
          대구시
        </option>
        <option value="울산시" className="searchbyregion-select">
          울산시
        </option>
        <option value="부산시" className="searchbyregion-select">
          부산시
        </option>
        <option value="강원도" className="searchbyregion-select">
          강원도
        </option>
        <option value="경기도" className="searchbyregion-select">
          경기도
        </option>
        <option value="경상남도" className="searchbyregion-select">
          경상남도
        </option>
        <option value="경상북도" className="searchbyregion-select">
          경상북도
        </option>
        <option value="전라남도" className="searchbyregion-select">
          전라남도
        </option>
        <option value="전라북도" className="searchbyregion-select">
          전라북도
        </option>
        <option value="충청남도" className="searchbyregion-select">
          충청남도
        </option>
        <option value="충청북도" className="searchbyregion-select">
          충청북도
        </option>
        <option value="제주도" className="searchbyregion-select">
          제주도
        </option>
      </select>
      <button onClick={() => search()} className="searchbyregion-searchbtn">
        검색
      </button>
      {CampingListData ? (
        <CampingList CampingListData={CampingListData}></CampingList>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchByRegion;
