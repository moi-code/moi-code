var admin = require("firebase-admin");

// var serviceAccount = require("../moi-code-firebase.json");

// const firebase = admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: `https://${process.env.REACT_APP_PROJECTID}.firebaseio.com`
// });
// module.exports = firebase;

const firebase = require("firebase/app");
require("firebase/analytics");
const { getConfig } = require("next/config");

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;
