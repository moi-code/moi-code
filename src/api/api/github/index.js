const getGithubData = require("./getGithubData");

module.exports = (app, server) => {
  /**
   * Gets Github Data Using API
   */
  server.get("/github", (req, res) => {
    getGithubData(req, res, app);
  });
};
