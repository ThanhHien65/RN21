const express = require("express");
const teacherRouter = express.Router();

teacherRouter.get("/", (req, res) => {
  res.send("teacher");
});
teacherRouter.get("/add", (req, res) => {});

module.exports = teacherRouter;
