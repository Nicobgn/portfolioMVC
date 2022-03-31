const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require(path.join(
  __dirname + "/../controllers/mainController"
));

router.get("/", controller.home);
router.get("/about", controller.about);

module.exports = router;
