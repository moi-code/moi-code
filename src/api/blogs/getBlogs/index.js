const cacheableResponse = require('cacheable-response');

const firebase = require('../../../../public/firebase/firebase.server');
require('firebase/auth');
require('firebase/firestore');

const db = firebase.firestore();

module.exports = (req, res, app) => {
  const ssrCache = cacheableResponse({
    ttl: 250 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams),
    }),
    send: ({ data, res }) => res.send(data),
  });

  db.collection('Blog').onSnapshot(
    function(querySnapshot) {
      var blogs = [];
      querySnapshot.forEach(function(doc) {
        const { id } = doc;

        const blogData = {
          id,
          title: doc.data().title,
          content: doc.data().content,
          description: doc.data().description,
          category: doc.data().category,
          photoURL: doc.data().photoURL,
          date: doc.data().date,
        };
        blogs.push(blogData);
      });
      const queryParams = { blogs: blogs };
      return ssrCache({ req, res, pagePath: '/blog', queryParams });
    },
    function(error) {
      //...
    }
  );
};
