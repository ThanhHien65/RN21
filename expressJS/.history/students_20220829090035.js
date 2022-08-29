const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.send("studen");
});
studentRouter.get("/add", (req, res) => {});

module.exports = studentRouter;
