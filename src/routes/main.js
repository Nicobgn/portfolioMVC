const path = require("path");
const express = require("express");
const router = express.Router();
// const controller = require("../controllers/mainController");
const { home, about } = require("../controllers/mainController");

router.get("/", home);
router.get("/about", about);

module.exports = router;
