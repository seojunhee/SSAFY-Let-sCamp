import React from 'react';
// import Loading from '';
import './style/Loading.css'

const Loading = () => {
  return (
    <div className='loading-back'>
      <img src={"./asset/output-onlinegiftools.gif"} alt="로딩중" width="50%" />
      <div className=''>잠시만 기다려 주세요.</div>
    </div>
  );
};

export default Loading;