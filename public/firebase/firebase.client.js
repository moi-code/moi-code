import firebase from "firebase/app";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
var firebaseConfig = publicRuntimeConfig || {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};
export { firebaseConfig };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default firebase