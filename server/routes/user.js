const express = require('express');
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/all", usersController.all);
router.post("/new", usersController.create);

module.exports = router; 