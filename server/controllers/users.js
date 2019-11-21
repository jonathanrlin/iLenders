const User = require('../models/mySQL').User;

module.exports = {
  all(req, res) {
    User.findAll()
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },

  create(req, res) {
    User.create(req.body)
      .then(data => res.json(data))
      .catch(errors => res.json(errors));
  },

  updateById(req, res) {
    User.findAll({
      where: {
        id: req.body.id
      }
    })
      .then(data => {
        if (data.length == 0) res.json({
          errors: {
            message: 'User not found'
          }
        })
        else return data;
      })
      .then(oldData => {
        User.update(
          req.body,
          {
            returning: true,
            where: { id: req.body.id }
          }
        )
          .then(data => res.json(req.body))
          .catch(errors => res.json(errors));
      })
      .catch(errors => console.log(errors));
  },

  deleteById(req, res) {
    User.findAll({
      where: {
        id: req.query.id
      }
    })
      .then(data => {
        if (data.length == 0) res.json({
          errors: {
            message: 'User not found'
          }
        })
        else return data;
      })
      .then(oldData => {
        User.destroy({
          where: { id: req.query.id }
        })
          .then(data => res.json(oldData))
          .catch(errors => res.json(errors));
      })
      .catch(errors => console.log(errors));
  },
};
