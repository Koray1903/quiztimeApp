import React from "react";
import "../../style/QuizPage.css";

const CategoryTypeDifficulty = props => {

  return (
    <>
      <div className="flexCategoryTypeDifficulty">
        {/* Question Category */}
        <div className="questionCategory"><strong>Category :</strong> {props.question.category}
        </div>
        {/* Question Category */}

        {/* Question Type */}
        <div
          className="questionType"><strong>Type
          :</strong> {props.question.type === "multiple" ? "Multiple Choice" : "True / False"}</div>
        {/* Question Type */}

        {/* Question Difficulty */}
        <div className="questionDifficulty"><strong>Difficulty
          :</strong> {props.question.difficulty}</div>
        {/* Question Difficulty */}
      </div>
    </>
  );
};

export default CategoryTypeDifficulty;