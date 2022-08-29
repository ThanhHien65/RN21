const express = require("express");
const app = express();
const teacherRouter = require("./teacher.js");
const studentRouter = require("./students.js");
const port = 3000;
const students = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 11 },
  { name: "Charlie", age: 11 },
];
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/home", (req, res) => {
  console.log("Home");
  res.send("Hello, world!");
});
app.get("/students", (req, res) => {
  res.json(students);
});
app.get("/students/add", (req, res) => {
  students.push({ name: "Daniel", age: 12 });
  res.json(students);
});
const teacherRouter = require("./teacher.js");
const studentRouter = require("./student.js");

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

app.listen();
