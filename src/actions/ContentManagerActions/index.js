import types from "../types";
import Router from "next/router";
import firebase from "../../../public/firebase/firebase.client";
import "firebase/auth";
import "firebase/firestore";
const { CONTENT_POST_SUCCESS, CONTENT_POST_FAIL } = types;
export const submitContent = payload => dispatch => {
  const db = firebase.firestore();
  const { title, description, content, category, userData } = payload;
  const { displayName, photoURL, uid } = userData;
  const contentData = {
    uid,
    displayName,
    photoURL,
    title,
    description,
    category,
    content,
    date: Date.now()
  };

  if (title.length > 0 && content.length > 0 && category.length > 0) {
    dispatch({
      type: CONTENT_POST_SUCCESS
    });

    db.collection(category)
      .doc()
      .set(contentData);
    Router.push({
      pathname:'/'
    })
  } else {
    dispatch({
      type: CONTENT_POST_FAIL
    });
  }
};
