const firebase = require('../../../public/firebase/firebase.server')
module.exports = (app, server) => {
  /**
   * @route GET api/login
   * @desc TESTS USERS ROUTE
   * @access Public
   */
  server.post("/auth/login/:email/:password", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    firebase
      .auth()
      .getUserByEmail(req.params.email)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully fetched user data:", userRecord.toJSON());
      })
      .catch(function(error) {
        console.log("Error fetching user data:", error);
      });
	});
	 server.post("/auth/logout", (req, res) => {
     req.session.decodedToken = null;
     res.json({ status: true });
   });
  server.get("/api/auth/register", (req, res) => {
    res.json({
      msg: "Register"
    });
    console.log("kappa");
  });
};
