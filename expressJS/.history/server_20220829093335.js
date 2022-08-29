import fetch from "node-fetch";
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const rawdata = JSON.parse(fs.readFileSync("./data/comment.json"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/comment", (req, res) => {
  res.send(rawdata);
});
app.get("/pokemon", (req, res) => {
  res.send("pokemon");
});
