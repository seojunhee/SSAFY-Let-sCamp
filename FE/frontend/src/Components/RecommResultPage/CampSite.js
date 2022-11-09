import React, { useEffect, useState } from "react";
import "./style/CampSite.css"
const CampSite = (props) => {

  return (
    <div className="height-55">
      <h4>당신에게 알맞은 캠핑장은</h4>
      <h3> {(props.campSiteList[props.listIdx].name)} </h3>
      <div className="height-65 container">
        <img src={props.campSiteList[props.listIdx].thumb} alt="캠핑장 사진" className="width-100"/>
      </div>
    </div>
  )
};

export default CampSite;