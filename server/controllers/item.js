const Item = require("../models/mySQL").Item;

module.exports = {
  all(req, res) {
    Item.findAll()
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },
  create(req, res) {
    Item.create(req.body)
      .then(newSellItem => {
        res.json({ sellItem: newSellItem });
      })
      .catch(err => {
        res.json({ err: err });
      });
  }
};
