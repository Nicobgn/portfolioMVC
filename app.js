const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

const routesMain = require(path.join(__dirname + "/src/routes/main"));

//	Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/src/views/"));
app.use(express.static("public"));

// 	Routes
app.use("/", routesMain);

// 	Middlewares
app.use((req, res, next) => {
  console.log(`En ${req.url} se utilizó ${req.method}`);
  next();
});

// 	Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
