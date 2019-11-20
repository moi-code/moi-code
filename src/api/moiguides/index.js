const cacheableResponse = require("cacheable-response");

const firebase = require("../../../public/firebase/firebase.server");
require("firebase/auth");
require("firebase/firestore");

module.exports = (app, server) => {
  const ssrCache = cacheableResponse({
    ttl: 250 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
  });
  server.get("/moi-guides", (req, res) => {
    // var user = firebase.auth().currentUser;
    // console.log(user)
    // if (user) {
    //   // User is signed in.
    //   db.collection("Guide").onSnapshot(function(querySnapshot) {
    //     var guides = [];
    //     querySnapshot.forEach(function(doc) {
    //       guides.push(doc.data().name);
    //     });
    //     console.log("# of Guides", guides.join(", "));
    //   });
    // } else {
    //   // No user is signed in.
    // }
    return ssrCache({ req, res, pagePath: "/moiguides" });
  });
};
