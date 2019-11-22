const express = require("express");
const router = express.Router();

const itemController = require("../controllers/item");

router.get("/all", itemController.all);
router.post("/new", itemController.create);
router.get("/one", itemController.getOne);
// router.put('/update', itemController.updateById);
// router.delete('/del', itemController.deleteById);

module.exports = router;
