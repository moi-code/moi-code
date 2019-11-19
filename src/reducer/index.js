import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import AuthReducer from "./AuthReducer";
import ContentManagerReducer from "./ContentManagerReducer";
export default combineReducers({
  GeneralReducer,
  AuthReducer,
  ContentManagerReducer
});
