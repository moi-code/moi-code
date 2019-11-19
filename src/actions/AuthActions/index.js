import types from "../types";
import firebase from "../../../public/firebase/firebase.client";
import "firebase/auth";
import Router from "next/router";

const {
  AUTHORIZED,
  HANDLE_USER_DATA,
  CLEAR_GEN_STATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} = types;
export const registerUser = () => dispatch => {};
export const userLogin = (email, password) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (error) {
        console.log(errorMessage);
        dispatch({
          type: LOGIN_USER_FAIL
        });
        return;
      }
    })
    .then(() => {
      dispatch({
        type: LOGIN_USER_SUCCESS
      });
      console.log("success");
      Router.push({
        pathname: "/dashboard"
      });
    })
    .then(() => {
      dispatch({
        type: CLEAR_GEN_STATE
      });
    });
};
export const handleAuth = () => dispatch => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const { displayName, email, photoURL, uid } = user;
      // ...

      await dispatch({
        type: AUTHORIZED,
        payload: { authed: true }
      });
      await dispatch({
        type: HANDLE_USER_DATA,
        payload: { userData: { displayName, email, photoURL, uid } }
      });
      if (window.location.pathname.includes("login"))
        Router.push({
          pathname: "/dashboard"
        });
    } else {
      // User is signed out.
      // ...
      await dispatch({
        type: AUTHORIZED,
        payload: { authed: false }
      });
      await dispatch({
        type: HANDLE_USER_DATA,
        payload: { userData: {} }
      });
      if (window.location.pathname.includes("dashboard"))
        Router.push({
          pathname: "/login"
        });
    }
  });
};
