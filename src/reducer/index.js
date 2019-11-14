import { combineReducers } from "redux";
import generalReducer from "./GeneralReducer";
export default combineReducers({
  general: generalReducer
});
