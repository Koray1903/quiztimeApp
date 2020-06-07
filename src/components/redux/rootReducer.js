import {combineReducers} from "redux";
import urlReducer from "./url/urlReducer";
import resultReducer from "./result/resultReducer";

const rootReducer = combineReducers({
  reducerUrl: urlReducer,
  reducerResult: resultReducer,
});

export default rootReducer;