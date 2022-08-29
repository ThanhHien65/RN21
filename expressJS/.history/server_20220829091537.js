const express = require("express");
const app = express();
const port = 3000;
const fs = require()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/home", (req, res) => {
  console.log("Home");
  res.send("Hello, world!");
});
