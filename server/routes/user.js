const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/all', usersController.all);
router.post('/new', usersController.create);
router.put('/update', usersController.updateById);
router.delete('/del', usersController.deleteById);

module.exports = router; 