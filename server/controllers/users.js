const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  all(req, res) {
    User.find()
      .then(allUsers => {
        res.json({ users: allUsers });
      })
      .catch(err => {
        res.json({ errors: err });
      });
  },

  create(req, res) {
    User.create(req.body)
      .then(newUser => {
        res.json({ user: newUser });
      })
      .catch(err => {
        res.json({ errors: err });
      });
  }
};
