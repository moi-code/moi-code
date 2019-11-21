const cacheableResponse = require("cacheable-response");

const firebase = require("../../../public/firebase/firebase.server");
require("firebase/auth");
require("firebase/firestore");
const db = firebase.firestore();
module.exports = (app, server) => {
  const ssrCache = cacheableResponse({
    ttl: 250 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
  });

  server.get("/guide/:category/:id", (req, res) => {
    const { category, id } = req.params;
    var docRef = db.collection(category).doc(id);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          const {
            category,
            content,
            date,
            description,
            displayName,
            photoURL,
            title,
            uid
          } = doc.data();
          const queryParams = {
            category,
            content,
            date,
            description,
            displayName,
            photoURL,
            title,
            uid
          };
          console.log("ran", queryParams);
          return ssrCache({ req, res, pagePath: "/guide", queryParams });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  });

  server.get("/moi-guides", (req, res) => {
    return ssrCache({ req, res, pagePath: "/moiguides" });
  });
};
