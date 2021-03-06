require("@babel/polyfill");
const dotenv = require("dotenv").config();
const express = require("express");
const next = require("next");
const cors = require("cors");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
let app;

if (process.env.NODE_ENV !== "backend") {
  app = next({ dev });

  const handle = app.getRequestHandler();
  let server = express();

  dotenv;
  app.prepare().then(() => {
    server.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
    server.use(bodyParser.json());
    server.use(cors());
    /**
     * @description Routes Used for the Project must come before the core.
     */
    require("./core")(app, server);
    require("./auth")(app, server);
    require("./about")(app, server);
    require("./github")(app, server);
    require("./live")(app, server);
    require("./dashboard")(app, server);
    
    require("./moiguides")(app, server);
    /**
     * @protected - Do not remove
     * @requires Server
     * @description This is the Core of the Project rendering the Homepage, Handling Get Requests, and starting the express server
     */
    require("./server")(app, server);
  });
} else {
  app = express();
  server = app;
  require("./auth")(app, server);
  require("./about")(app, server);
  require("./server")(app, server);
}
