const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');

router.get('/all', itemController.all);
router.get('/all/rented/:id', itemController.getUsersRentedItems);
router.get('/all/bought/:id', itemController.getUsersBoughtItems);
router.get('/all/lent/:id', itemController.getUsersLentItems);
router.get('/all/sold/:id', itemController.getUsersSoldItems);
router.post('/new', itemController.createWithUserId);
router.put('/update', itemController.updateById);
router.delete('/del', itemController.deleteById);

module.exports = router; 