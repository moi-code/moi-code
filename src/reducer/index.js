import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import AuthReducer from "./AuthReducer";
import ContentManagerReducer from "./ContentManagerReducer";
import MoiGuideReducer from './MoiGuideReducer'
import MoiBlogReducer from './MoiBlogReducer'
export default combineReducers({
  GeneralReducer,
  AuthReducer,
  ContentManagerReducer,
  MoiGuideReducer,
  MoiBlogReducer
});
