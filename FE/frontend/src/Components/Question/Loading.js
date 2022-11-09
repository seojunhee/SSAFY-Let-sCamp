import React from 'react';
// import Loading from '';
import './style/Loading.css'

export default () => {
  return (
    <div className='loading-back'>
      <img src={"./asset/recommendResultLoading.gif"} alt="로딩중" width="50%" />
      <div className='back-white'>잠시만 기다려 주세요.</div>
    </div>
  );
};