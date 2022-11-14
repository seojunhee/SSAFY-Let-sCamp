import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios'
import letsCamp from "../api/LetsCamp"

import {v4 as uuidv4} from 'uuid';

import {ref, uploadString} from "@firebase/storage"
import { storageService } from "../firebase.js";
// Component
import Header from '../Components/Header/Header.js'
import Loading from "../Components/Recycle/Loading.js";
import Navbar from "../Components/NavBar/NavBar.js"

// css
import './style/Button.css'

const Recycle = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState("");
  const [attachment, setAttachment] = useState("./asset/Recycle.png");
  const [isComplete, SetIsComplete] = useState(false);
  const [trash, setTrash] = useState();
  
  const onChangeTrash = (e) => {
    let trashName = ""

    switch (e) {
      case "cardboard":
        trashName = "상자"
        break;
      case "glass":
        trashName = "유리"
        break;
      case "metal":
        trashName = "고철"
        break;
      case "paper":
        trashName = "종이"
        break;
      case "plastic":
        trashName = "플라스틱"
        break;
      default:
        trashName= "일반 쓰레기"
        break;
    }
    setTrash(trashName)
    return
  }

  const isLogined = () => {
    if (!sessionStorage.getItem("accessToken")) {
      alert("잘못된 페이지 접근입니다.")
      navigate("/login")
      
    }
  }

  const onLoadFile = (e) => {
    setFiles(e.target.files)

  };

  const onScanning = async () => {
    setLoading(true)
    const filename = uuidv4();
    const apiUrl = letsCamp.classification.classify(filename);
    const fileRef = ref(storageService, filename);
    console.log(fileRef)
    SetIsComplete(true)
    uploadString(fileRef, attachment, 'data_url')
    .then(() => {
      console.log("upload")
      axios
      .get(apiUrl, 
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("accessToken")
          }
        })
        .then(function (response) {
          console.log(response.data.result)
          onChangeTrash(response.data.result)
          setLoading(false)
          setFiles("")
        })
        .catch(function (error) {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          }
          else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
          }console.log(error.config);
        })
      });
    
  }

  useEffect(() => {
    preview();
    isLogined();

    return () => preview();
  })

  const preview = () => {
    
    if (!(files) || (files) === []) return false;

    const reader = new FileReader();

    reader.onload = () => {
      setAttachment(reader.result)
    };

    reader.readAsDataURL(files[0]);
  
  };

  

  return (
    <div className="App">
      {loading ? <Loading /> : null}
      <Header pageName="캠핑 마무리"/>
      <div className="width-100 height-55">
        <img src={attachment} className="img-cover width-100 height-100" alt="쓰레기 사진"></img>
      </div>
      <div className="filebox">
        <label htmlFor="file">파일찾기</label> 
        <input type="file" id="file" onChange={onLoadFile}/>
      </div>
      <div className="height-10 outer-div">
        {isComplete? `${trash}입니다. 분리수거를 잘 해주세요`: "쓰레기 사진을 올리면 분석하여 알려드립니다."}
      </div>
      <div className="container">
        <button className="move-btn" onClick={onScanning} disabled={!files}>분석하기</button>
        <Link to={"/main"}>
          <button className="move-btn-white" >메인으로</button>
        </Link>
      </div>
      <Navbar />
    </div>
  )
}

export default Recycle;