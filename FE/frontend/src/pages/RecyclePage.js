import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Component
import Header from '../Components/Header/Header.js'
import Loading from "../Components/Recycle/Loading.js";

const Recycle = () => {

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState("");
  

  const onLoadFile = (e) => {
    setFiles(e.target.files)

  };

  useEffect(() => {
    preview();

    return () => preview();
  })

  const preview = () => {
    if (!(files)) return false;
    
    const imgEl = document.querySelector('.img__box')

    const reader = new FileReader();

    reader.onload = () => (imgEl.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(files[0]);
  };

  

  return (
    <div className="App">
      {loading ? <Loading /> : null}
      <Header />
      <div className="width-100 height-55 img__box">
      </div>
      <input type="file" onChange={onLoadFile}/>
    </div>
  )
}

export default Recycle;