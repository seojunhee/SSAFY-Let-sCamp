import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Component
import Header from '../Components/Header/Header.js'
import Loading from "../Components/Recycle/Loading.js";
import Navbar from "../Components/NavBar/NavBar.js"

const Recycle = () => {

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState("");
  const [isComplete, SetIsComplete] = useState(false)
  

  const onLoadFile = (e) => {
    setFiles(e.target.files)

  };

  const onScanning = () => {
    SetIsComplete(!isComplete)

  }

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
      <div className="height-15">
        {isComplete? "이건 무슨 물건입니다. 분리수거를 잘 해주세요": "쓰레기 사진을 올리면 분석하여 알려드립니다."}
      </div>
      <div className="container">
        <button onClick={onScanning}>분석하기</button>
        <Link to={"/main"}>
          <button>메인으로</button>
        </Link>
      </div>
      <Navbar />
    </div>
  )
}

export default Recycle;