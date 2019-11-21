const Item = require('../models/mySQL').Item;

module.exports = {
  all(req, res){
    Item.findAll()
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  }
}