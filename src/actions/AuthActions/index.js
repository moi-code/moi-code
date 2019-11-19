import types from "../types";

import firebase from "../../../public/firebase/firebase.client";
import "firebase/auth";

const {
  SET_LOGIN_TEXT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  IS_AUTHED
} = types;

export const loginTextChange = payload => dispatch => {
  dispatch({
    type: SET_LOGIN_TEXT,
    payload
  });
};
export const isAuthed = payload => dispatch => {
  console.log("checking auth...");
  dispatch({
    type: IS_AUTHED,
    payload
  });
};
export const registerUser = () => dispatch => {};
export const userLogin = (email, password) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: LOGIN_USER_SUCCESS
      });
      console.log("success");
       Router.push({
         pathname: "/dashboard"
       });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (error) {
        dispatch({
          type: LOGIN_USER_FAIL
        });
        console.log(errorMessage);
      }
    });
};
export const handleAuth = () => dispatch => {
  console.log('handling AuthState')
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      dispatch({
        type: IS_AUTHED,
        payload: { auth: true }
      });
      console.log("user", user);
      console.log("authed", authed, isAuthed);
      if (window.location.pathname.includes("login"))
        Router.push({
          pathname: "/dashboard"
        });
    } else {
      // User is signed out.
      // ...
      console.log("!authed", authed);
      dispatch({
        type: IS_AUTHED,
        payload: { auth: false }
      });
      if (window.location.pathname.includes("dashboard"))
        Router.push({
          pathname: "/login"
        });
    }
  });
  console.log("authed");
};
