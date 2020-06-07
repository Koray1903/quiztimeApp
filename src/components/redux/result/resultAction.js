import {ADD_CORRECT_ANSWER} from "./resultTypes";
import {ADD_WRONG_ANSWER} from "./resultTypes";
import {ADD_START_TIME} from "./resultTypes";
import {ADD_FINISH_TIME} from "./resultTypes";

export const addCorrectAnswer = () => {
  return {
    type: ADD_CORRECT_ANSWER
  };
};
export const addWrongAnswer = () => {
  return {
    type: ADD_WRONG_ANSWER
  };
};
export const addStartTime = () => {
  const rightNow = new Date();
  return {
    type: ADD_START_TIME,
    payload: rightNow.getTime()
  };
};
export const addFinishTime = () => {
  const rightNow = new Date();
  return {
    type: ADD_FINISH_TIME,
    payload: rightNow.getTime()
  };
};