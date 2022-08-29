const express = require("express");
const teacherRouter = express.Router();

teacherRouter.get("/", (req, res) => {
  res.send("teacher");
});
teacherRouter.get("/add", (req, res) => {
  res.send("teacheradd");
});

module.exports = teacherRouter;


const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {});
studentRouter.get("/add", (req, res) => {});

module.exports = studentRouter;
