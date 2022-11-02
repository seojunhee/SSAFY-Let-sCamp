import React from "react";

const questionSix = (prod) => {

  switch(prod.season) {
    case "봄":
      return (
        <div className="height-55 outer-div">
          봄
        </div>
      )
    case "여름":
      return (
        <div className="height-55 outer-div">
          여름
        </div>
      )
    case "가을":
      return (
        <div className="grid height-55">
          <div className="item col-6 w-btn">
            가을단풍명소
          </div>
          <div className="item w-btn">
            일출명소
          </div>
          <div className="item w-btn">
            일몰명소
          </div>
          <div className="item w-btn">
            낚시
          </div>
          <div className="item w-btn">
            걷기길
          </div>
          <div className="item w-btn">
            항공레저
          </div>
          <div className="item w-btn">
            액티비티
          </div>
        </div>
      )
    case "겨울":
      return (
        <div className="height-55 outer-div">
          겨울
        </div>
      )
    default:
      return (<>실패!</>)
  }

  return (
    <div>
      <div className="height-55 outer-div">
        
      </div>
    </div>
  )
};

export default questionSix;