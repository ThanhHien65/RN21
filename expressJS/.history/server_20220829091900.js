const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/home", (req, res) => {
  fs.readFile("./data/comment.txt", "utf8", (err, data) => {
    if(err){
        res.send('')
    }
  });
});
