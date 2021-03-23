import { combineReducers } from "redux";
import reducerActive from "./reducerActive";

const allReducers = combineReducers({
  active: reducerActive,
});

export default allReducers;
