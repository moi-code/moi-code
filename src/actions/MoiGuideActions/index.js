import types from "../types";
import Router from "next/router";
import firebase from "../../../public/firebase/firebase.client";
import "firebase/auth";
import "firebase/firestore";
const { GOT_GUIDE_DATA } = types;
export const getMoiGuides = () => dispatch => {
  console.log("q");
  const db = firebase.firestore();

  db.collection("Guide").onSnapshot(
    function(querySnapshot) {
      var guides = [];
      querySnapshot.forEach(function(doc) {
        const { id } = doc;

        const guideData = {
          id,
          title: doc.data().title,
          content: doc.data().content,
          description: doc.data().description,
          category: doc.data().category,
          photoURL: doc.data().photoURL,
          date: doc.data().date
        };
        guides.push(guideData);
      });
      dispatch({
        type: GOT_GUIDE_DATA,
        payload: { value: guides }
      });
    },
    function(error) {
      //...
    }
  );

  // dispatch({})
};
