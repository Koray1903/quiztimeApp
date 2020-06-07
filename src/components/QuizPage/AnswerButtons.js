import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "../../style/QuizPage.css";
import {addCorrectAnswer, addWrongAnswer} from "../redux";

const AnswerButtons = props => {

  const [buttonStatus, setButtonStatus] = useState(false);

  // Disabling other answers on click
  useEffect(() => {
    setButtonStatus(false);
  }, [props.pageFirst, props.pageSecond]);
  // Disabling other answers on click

  // Click on Answer One
  const handleAnswerOne = () => {
    props.question.all_answers[0] === props.question.correct_answer ? props.addCorrectAnswer() : props.addWrongAnswer();
    setTimeout(() => setButtonStatus(true), 100);
  };
  // Click on Answer One

  // Click on Answer Two
  const handleAnswerTwo = () => {
    props.question.all_answers[1] === props.question.correct_answer ? props.addCorrectAnswer() : props.addWrongAnswer();
    setTimeout(() => setButtonStatus(true), 100);
  };
  // Click on Answer Two

  // Click on Answer Three
  const handleAnswerThree = () => {
    props.question.all_answers[2] === props.question.correct_answer ? props.addCorrectAnswer() : props.addWrongAnswer();
    setTimeout(() => setButtonStatus(true), 100);
  };
  // Click on Answer Three

  // Click on Answer Four
  const handleAnswerFour = () => {
    props.question.all_answers[3] === props.question.correct_answer ? props.addCorrectAnswer() : props.addWrongAnswer();
    setTimeout(() => setButtonStatus(true), 100);
  };
  // Click on Answer Four

  return (
    <>
      {/* Fixed Answers for both question types */}
      <div className="GridAnswers">

        {/* Answer One */}
        <button className="AnswerButton"
                disabled={buttonStatus}
                onClick={handleAnswerOne}><strong>A)</strong> {props.question.all_answers[0]}
        </button>
        {/* Answer One */}

        {/* Answer Two */}
        <button className="AnswerButton"
                disabled={buttonStatus}
                onClick={handleAnswerTwo}><strong>B)</strong> {props.question.all_answers[1]}
        </button>
        {/* Answer Two */}

        {/* Optional Answers Disappearing for True-False questions */}
        {props.question.type === "multiple" ?
          <>
            {/* Answer Three */}
            <button
              className="AnswerButton"
              disabled={buttonStatus}
              onClick={handleAnswerThree}><strong>C)</strong> {props.question.all_answers[2]}
            </button>
            {/* Answer Three */}

            {/* Answer Four */}
            <button
              className="AnswerButton"
              disabled={buttonStatus}
              onClick={handleAnswerFour}><strong>D)</strong> {props.question.all_answers[3]}
            </button>
            {/* Answer Four */}
          </>
          : null}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addCorrectAnswer: () => dispatch(addCorrectAnswer()),
    addWrongAnswer: () => dispatch(addWrongAnswer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerButtons);