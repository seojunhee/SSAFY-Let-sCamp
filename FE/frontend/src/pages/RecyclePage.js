import React from "react";
import { Link } from "react-router-dom";

// Component
import Header from '../Components/Header/Header.js'
import Loading from "../Components/Recycle/Loading.js";

const Recycle = () => {

  return (
    <div className="App">
      <Loading />
      <Header />
    </div>
  )
}

export default Recycle;