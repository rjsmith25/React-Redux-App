import { combineReducers } from "redux";
import jokesReducer from "./jokesReducer";

const rootReducer = combineReducers({
  jokes: jokesReducer
});

export default rootReducer;
