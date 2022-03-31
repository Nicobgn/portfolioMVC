const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require(path.join(
  __dirname + "/../controllers/productController"
));
const views = path.join(__dirname + "/../views");

module.exports = router;
