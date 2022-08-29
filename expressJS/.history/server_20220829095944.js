const express = require("express");
const fetch = require("node-fetch");
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
  console.log(datapokemon);
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})
});
