module.exports = (app, server) => {
server.get("/dashboard", (req, res) => {
    return app.render(req, res, "/dashboard");
  });
};
