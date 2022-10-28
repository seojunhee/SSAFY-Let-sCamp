import React from "react";

const Question = (props) => {
  return (
    <>
      <header>
        <h2 className="contanier">{props.question}</h2>
      </header>
    </>
  )
};

export default Question;