const cacheableResponse = require("cacheable-response");
const axios = require("axios");
module.exports = (app, server) => {
  const ssrCache = cacheableResponse({
    ttl: 250 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
  });
  /**
   * Gets Live Data Using API
   */
  server.get("/live/:streamer", (req, res) => {
    console.log("streamer", req.params.streamer);
    const queryParams = {
      targetID: "twitch-embed",
      width: "100%",
      height: "80%",
      channel: req.params.streamer,
      theme: "dark",
      autoplay: false
    };
    return ssrCache({
      req,
      res,
      pagePath: "/live",
      queryParams
    });
  });
  /**
   * Gets Live Data Using API
   */
  server.get("/live", (req, res) => {
    const queryParams = {
      targetID: "twitch-embed",
      width: "100%",
      height: "80%",
      channel: "moikune",
      theme: "dark",
      autoplay: false
    };
    return ssrCache({
      req,
      res,
      pagePath: "/live",
      queryParams
    });
  });
};
