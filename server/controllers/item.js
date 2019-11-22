const Item = require("../models/mySQL").Item;
const User = require("../models/mySQL").User;

module.exports = {
  all(req, res) {
    Item.findAll()
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },
  getOne(req, res) {
    console.log(req.query.id + "Yadda");
    Item.findAll({ where: { id: req.query.id } })
      .then(data => {
        res.json({ data: data[0] });
      })
      .catch(errors => {
        res.json({ errors: errors });
      });
  },

  createWithUserId(req, res) {
    console.log(req.body);
    // if (!req.body.hasOwnProperty('UserId')) {
    //   res.json({ errors: { message: 'No such user' } });
    //   return;
    // }
    Item.create(req.body)
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },

  updateById(req, res) {
    if (req.body.hasOwnProperty("UserId")) delete req.body.UserId;

    Item.update(req.body, { where: { id: req.body.id } })
      .then(data => {
        if (data[0] < 1) res.json({ errors: { message: "No such item" } });
        else res.json(req.body);
      })
      .catch(errors => res.json(errors));
  },

  deleteById(req, res) {
    Item.destroy({ where: { id: req.query.id } })
      .then(data => {
        if (data < 1) res.json({ errors: { message: "No such item" } });
        else res.json(req.query);
      })
      .catch(errors => res.json(errors));
  }
};
