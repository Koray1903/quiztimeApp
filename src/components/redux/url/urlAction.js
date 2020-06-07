import {ADD_AMOUNT} from "./urlTypes";
import {ADD_CATEGORY} from "./urlTypes";
import {ADD_DIFFICULTY} from "./urlTypes";
import {ADD_TYPE} from "./urlTypes";
import {FETCH_QUESTIONS} from "./urlTypes";

export const addamount = (amount) => {
  return {
    type: ADD_AMOUNT,
    payload: amount
  };
};
export const addcategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
};
export const adddifficulty = (difficulty) => {
  return {
    type: ADD_DIFFICULTY,
    payload: difficulty
  };
};
export const addtype = (type) => {
  return {
    type: ADD_TYPE,
    payload: type
  };
};

export const fetchquestions = url => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const questionsArray = data.results;

        /* RANDOMIZING ANSWERS ORDER */
        function randomize(arr) {
          arr.sort(() => Math.random() - 0.5);
        }

        for (let i = 0; i < questionsArray.length; i++) {
          questionsArray[i].all_answers = [questionsArray[i].correct_answer, questionsArray[i].incorrect_answers[0],
            questionsArray[i].incorrect_answers[1], questionsArray[i].incorrect_answers[2]];
          randomize(questionsArray[i].all_answers);
        }
        /* RANDOMIZING ANSWERS ORDER */

        dispatch(fetchedquestions(questionsArray));
      });
  };
};

export const fetchedquestions = (questionsArray) => {
  return {
    type: FETCH_QUESTIONS,
    payload: questionsArray
  };
};