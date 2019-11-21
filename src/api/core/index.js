const cacheableResponse = require("cacheable-response");
const { parse } = require("url");
const { join } = require("path");
module.exports = (app, server) => {
  const ssrCache = cacheableResponse({
    ttl: 250 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
  });

  server.get("/service-worker.js",(req,res)=>{
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = join(`${__dirname}/../../../`, ".next/static/", pathname);
    app.serveStatic(req, res, filePath);
  })
  server.get("/", (req, res) => {
    return ssrCache({ req, res, pagePath: "/" });
  });
};
