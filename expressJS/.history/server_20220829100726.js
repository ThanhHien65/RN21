const express = require("express");
const axios = require("axios");
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
  //   res.send("pokemon");
  axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((resp) => {
    console.log(resp.data);
  });
});
