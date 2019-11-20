const User = require('../models/mySQL').User;

module.exports = {
  all(req, res) {
    User.findAll()
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
