const Item = require("../models/mySQL").Item;
const User = require("../models/mySQL").User;

module.exports = {
  all(req, res) {
    Item.findAll()
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },
  createWithUserId(req, res) {
    if (!req.body.hasOwnProperty('UserId')) {
      res.json({ errors: { message: 'No such user' } });
      return;
    }
    Item.create(req.body)
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  }
};
