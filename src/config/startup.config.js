const bodyParser = require('body-parser');

module.exports = (app) => {

  // Setup Middleware
  app.use(bodyParser.json());

  // Routes
  app.get("/", function(req,res) {
      res.send("hello world");
  })
}