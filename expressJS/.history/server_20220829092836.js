const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const rawdata = fs.readFileSync("./data/comment.json"); JSON.parse(rawdata);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.get("/comment", (req, res) => {
//   fs.readFileSync("./data/comment.txt", "utf8", (err, data) => {
//     if (err) {
//       res.send("error");
//     }
//     res.send(data);
//   });
// });
app.get("/pokemon", (req, res) => {
  res.send("pokemon");
});
