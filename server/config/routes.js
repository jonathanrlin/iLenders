const usersController = require("../controllers/users");

module.exports = function(app) {
  app.get("/api/users", usersController.all);
  app.post("/api/users", usersController.create);
};
