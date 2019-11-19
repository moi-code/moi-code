import { combineReducers } from "redux";
import generalReducer from "./GeneralReducer";
import AuthReducer from "./AuthReducer";
import ContentManagerReducer from "./ContentManagerReducer";
export default combineReducers({
  generalReducer,
  AuthReducer,
  ContentManagerReducer
});
