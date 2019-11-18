var admin = require("firebase-admin");

var serviceAccount = require("../moi-code-firebase.json");


const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://moi-code.firebaseio.com"
});
module.exports = firebase;
