import { combineReducers } from 'redux';
import generalReducer from './GeneralReducer';
import AuthReducer from './AuthReducer';
export default combineReducers({
  generalReducer,
  AuthReducer
});
