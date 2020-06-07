import React from "react";
import "../style/Results.css";
import {Link} from "react-router-dom";
import {addCorrectAnswer, addWrongAnswer} from "./redux";
import {connect} from "react-redux";

const Results = props => {

  const ElapsedTimeInSeconds = (props.finishTime - props.startTime) / 1000;

  return (
    <>
      <div className="ResultsPage">
        {/* HOMEPAGE BUTTON */}
        <Link to="/">
          <p className="returnHomepageResult">HOMEPAGE</p>
        </Link>
        {/* HOMEPAGE BUTTON */}

        {/* RESULTS */}
        <div className="ResultMain">
          <p className="ResultTime"><strong>Time Elapsed :</strong> {ElapsedTimeInSeconds >= 60 ?
            `${parseInt(ElapsedTimeInSeconds / 60)} Minutes ${parseInt(ElapsedTimeInSeconds % 60)} Seconds` :
            `${parseInt(ElapsedTimeInSeconds)} Seconds`}</p>

          <p className="ResultCorrect"><strong>Correct Answers
            :</strong> {props.correctAnswers} / {props.amount} </p>

          <p className="ResultWrong"><strong>Wrong Answers
            :</strong> {props.wrongAnswers} / {props.amount}</p>
        </div>
        {/* RESULTS */}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    amount: state.reducerUrl.url.amount,
    correctAnswers: state.reducerResult.result.correctAnswers,
    wrongAnswers: state.reducerResult.result.wrongAnswers,
    startTime: state.reducerResult.result.startTime,
    finishTime: state.reducerResult.result.finishTime
  };
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
)(Results);