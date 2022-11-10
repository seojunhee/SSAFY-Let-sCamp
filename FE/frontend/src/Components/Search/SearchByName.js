import React, { useState } from "react";
import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import CampingList from "./CampingList.js";
import "./style/SearchByName.css";

const SearchByName = () => {
  const [name, SetName] = useState();
  const [CampingListData, SetCampingList] = useState();

  const search = (name) => {
    console.log(name);
    const url = LetsCamp.camping.serchByName(name);
    console.log(url);

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

  const settingName = (e) => {
    SetName(e.target.value);
  };

  return (
    <div className="searchbyname">
      <input
        className=""
        placeholder="캠핑장명을 검색하세요"
        value={name}
        onChange={settingName}
      />
      <button onClick={() => search(name)}>검색</button>
      {CampingListData ? (
        <CampingList CampingListData={CampingListData}></CampingList>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchByName;
