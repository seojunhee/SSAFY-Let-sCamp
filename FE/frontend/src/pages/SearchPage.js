import React, { useState } from "react";
import Header from "../Components/Header/Header.js";
import SearchByName from "../Components/Search/SearchByName.js";
import SearchByRegion from "../Components/Search/SearchByRegion.js";
import NavBar from "../Components/NavBar/NavBar.js";
import "./style/SearchPage.css";

const Search = () => {
  const [changeSearch, SetChange] = useState(true); // true면 이름검색 false면 지역검색(기본은 이름)
  return (
    <div>
      <Header pageName={"검색"}></Header>
      <div>
        <button
          onClick={() => {
            SetChange(true);
          }}
          className={changeSearch ? "searchpage-btn2" : "searchpage-btn1"}
        >
          이름으로 검색
        </button>
        <button
          onClick={() => {
            SetChange(false);
          }}
          className={changeSearch ? "searchpage-btn1" : "searchpage-btn2"}
        >
          지역으로 검색
        </button>
        {changeSearch ? (
          <SearchByName></SearchByName>
        ) : (
          <SearchByRegion></SearchByRegion>
        )}
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Search;
