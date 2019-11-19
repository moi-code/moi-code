import types from "../types";

import firebase from "../../../public/firebase/firebase.client";
import "firebase/auth";
import "firebase/"
const { HANDLE_CONTENT_MANAGER_TEXT } = types;
export const contentManagerTextChange = payload => dispatch => {
  dispatch({
    type: HANDLE_CONTENT_MANAGER_TEXT,
    payload
  });
};

export const submitContent = ()=>dispatch=>{
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
    }})
}