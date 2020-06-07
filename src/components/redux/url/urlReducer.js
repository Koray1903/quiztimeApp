import {ADD_AMOUNT} from "./urlTypes";
import {ADD_CATEGORY} from "./urlTypes";
import {ADD_DIFFICULTY} from "./urlTypes";
import {ADD_TYPE} from "./urlTypes";
import {FETCH_QUESTIONS} from "./urlTypes";

const initialState = {
  url: {
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
    newUrl: "https://opentdb.com/api.php?amount=10&category=&difficulty=&type=",
    // In case User skips settings
    questionsArray: []
  }
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return {
        ...state,
        url: { // Looks repetitive
          amount: action.payload,
          category: state.url.category,
          difficulty: state.url.difficulty,
          type: state.url.type,
          newUrl: `https://opentdb.com/api.php?amount=${action.payload}&category=${state.url.category}&difficulty=${state.url.difficulty}&type=${state.url.type}`
        }
      };
    case
    ADD_CATEGORY:
      return {
        ...state,
        url: { // Looks repetitive
          amount: state.url.amount,
          category: action.payload,
          difficulty: state.url.difficulty,
          type: state.url.type,
          newUrl: `https://opentdb.com/api.php?amount=${state.url.amount}&category=${action.payload}&difficulty=${state.url.difficulty}&type=${state.url.type}`
        }
      };
    case
    ADD_DIFFICULTY:
      return {
        ...state,
        url: { // Looks repetitive
          amount: state.url.amount,
          category: state.url.category,
          difficulty: action.payload,
          type: state.url.type,
          newUrl: `https://opentdb.com/api.php?amount=${state.url.amount}&category=${state.url.category}&difficulty=${action.payload}&type=${state.url.type}`
        }
      };
    case
    ADD_TYPE:
      return {
        ...state,
        url: { // Looks repetitive
          amount: state.url.amount,
          category: state.url.category,
          difficulty: state.url.difficulty,
          type: action.payload,
          newUrl: `https://opentdb.com/api.php?amount=${state.url.amount}&category=${state.url.category}&difficulty=${state.url.difficulty}&type=${action.payload}`
        }
      };
    case FETCH_QUESTIONS:
      return {
        ...state,
        url: { // Looks repetitive
          amount: state.url.amount,
          category: state.url.category,
          difficulty: state.url.difficulty,
          type: state.url.type,
          newUrl: `https://opentdb.com/api.php?amount=${state.url.amount}&category=${state.url.category}&difficulty=${state.url.difficulty}&type=${state.url.type}`,
          questionsArray: [...action.payload]
        }
      };

    default:
      return state;
  }
};
export default urlReducer;