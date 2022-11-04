import React, { useEffect, useState } from "react";
import "./style/CampSite.css"
const CampSite = (props) => {

  return (
    <>
      <h4>당신에게 알맞은 캠핑장은</h4>
      <h3> {(props.campSiteList[0].name)} </h3>
      <div className="imgBox">
        <p></p>
        <img src={props.campSiteList[0].thumb} alt="캠핑장 사진" />
      </div>
      
    </>
  )
};

export default CampSite;