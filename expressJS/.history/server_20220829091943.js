const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/home", (req, res) => {
  fs.readFile("./data/comment.json", (err, data) => {
    if (err) {
      res.send("error");
    }
    res.send(data);
  });
});
