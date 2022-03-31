const path = require("path");
const views = path.join(__dirname + "/../views");
const mainController = {
  home: (req, res) => {
    res.sendFile(views + "/home.html");
  },
  about: (req, res) => {
    res.sendFile(views + "/about.html");
  },
};

module.exports = mainController;
