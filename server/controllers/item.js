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
  },
  getOne(req, res) {
    console.log(req.query.id + "Yadda");
    Item.findAll({ where: { id: req.query.id } })
      .then(item => {
        res.json({ item: item });
      })
      .catch(errors => {
        res.json({ errors: errors });
      });
  }
};
