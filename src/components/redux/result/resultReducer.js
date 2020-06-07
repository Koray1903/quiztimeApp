import {ADD_CORRECT_ANSWER} from "./resultTypes";
import {ADD_WRONG_ANSWER} from "./resultTypes";
import {ADD_START_TIME} from "./resultTypes";
import {ADD_FINISH_TIME} from "./resultTypes";

const initialState = {
  result: {
    correctAnswers: 0,
    wrongAnswers: 0,
    startTime: 0,
    finishTime: 0
  }
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CORRECT_ANSWER:
      return {
        ...state,
        result: { // Looks repetitive
          correctAnswers: state.result.correctAnswers + 1,
          wrongAnswers: state.result.wrongAnswers,
          startTime: state.result.startTime,
          finishTime: state.result.finishTime
        }
      };
    case
    ADD_WRONG_ANSWER:
      return {
        ...state,
        result: { // Looks repetitive
          correctAnswers: state.result.correctAnswers,
          wrongAnswers: state.result.wrongAnswers + 1,
          startTime: state.result.startTime,
          finishTime: state.result.finishTime
        }
      };
    case
    ADD_START_TIME:
      return {
        ...state,
        result: { // Looks repetitive
          correctAnswers: state.result.correctAnswers,
          wrongAnswers: state.result.wrongAnswers,
          startTime: action.payload,
          finishTime: state.result.finishTime
        }
      };
    case
    ADD_FINISH_TIME:
      return {
        ...state,
        result: { // Looks repetitive
          correctAnswers: state.result.correctAnswers,
          wrongAnswers: state.result.wrongAnswers,
          startTime: state.result.startTime,
          finishTime: action.payload
        }
      };
    default:
      return state;
  }
};

export default resultReducer;