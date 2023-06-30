import React, { useState } from "react";

function Card({ question }) {
  const [questionState, setQuestionState] = useState(true);
  const answerStyle = {
    // backgroundColor: "red",
    // color: "white",
    // width: "150px",
    // height: "80px",
    // padding: "20px",
    textAlign: "center",
  };

  const questionStyle = {
    // backgroundColor: "#333",
    // color: "#0000",
    // color: "white",
    // width: "150px",
    // height: "80px",

    textAlign: "center",
  };
  return (
    <div
      onClick={() => setQuestionState(!questionState)}
      //   style={{ padding: "20px", height: "150px" }}
      className={questionState ? "flashcard" : "flashcard ans "}
    >
      <h2 style={questionState ? questionStyle : answerStyle}>
        {questionState ? question.question : question.answer}
      </h2>
    </div>
  );
}

export default Card;
