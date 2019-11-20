const port = parseInt(process.env.PORT, 10) || 8989;

module.exports = function core(app, server) {
  if (process.env.NODE_ENV !== "backend") {
    const handle = app.getRequestHandler();
    
    

    server.all("*", (req, res) => {
      return handle(req, res);
    });
  }

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
};
