import types from "../types";

import firebase from '../../../public/firebase/firebase.client'
import 'firebase/auth'

const { SET_LOGIN_TEXT, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,IS_AUTHED } = types;
export const loginTextChange = payload => dispatch => {
  dispatch({
    type: SET_LOGIN_TEXT,
    payload
  });
};
export const registerUser = () => dispatch => {};
export const userLogin = ( email, password ) => dispatch => {
  console.log(email, password, firebase);

  console.log(process.env.APPID)
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      dispatch({
        type: LOGIN_USER_FAIL
      });
      console.log(errorMessage);
    })
    .then(() => {
      dispatch({
        type: LOGIN_USER_SUCCESS
      });
      console.log("success");
    });
};
export const IsAuthed = (payload)=>dispatch=>{
  dispatch({
    type: IS_AUTHED,
    payload
  });
}