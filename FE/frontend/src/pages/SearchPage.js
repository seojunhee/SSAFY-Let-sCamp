import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header.js";
import SearchByName from "../Components/Search/SearchByName.js";
import SearchByRegion from "../Components/Search/SearchByRegion.js";
import NavBar from "../Components/NavBar/NavBar.js";
import "./style/SearchPage.css";
import axios from "axios";
import LetsCamp from "../api/LetsCamp.js";

const Search = () => {
  const [changeSearch, SetChange] = useState(false); // true면 이름검색 false면 지역검색(기본은 이름)
  const [address, SetAddress] = useState();

  useEffect(() => {
    const url = LetsCamp.user.info();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        SetAddress(response.data.address);
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
  }, []);

  return (
    <div className="searchpage">
      <Header pageName={"검색"}></Header>
      <div className="searchpage-btnbox">
        <button
          onClick={() => {
            SetChange(false);
          }}
          className={changeSearch ? "searchpage-btn1" : "searchpage-btn2"}
        >
          지역으로 검색
        </button>
        <button
          onClick={() => {
            SetChange(true);
          }}
          className={changeSearch ? "searchpage-btn2" : "searchpage-btn1"}
        >
          이름으로 검색
        </button>
        {changeSearch === true ? <SearchByName></SearchByName> : null}
        {changeSearch === false && address ? (
          <SearchByRegion address={address}></SearchByRegion>
        ) : null}
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Search;
