const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require(path.join(
  __dirname + "/../controllers/mainController"
));
const views = path.join(__dirname + "/../views");

router.get("/", (req, res) => {
  res.sendFile(views + "/home.html");
});
router.get("/about", (req, res) => {
  res.sendFile(views + "/about.html");
});

module.exports = router;
