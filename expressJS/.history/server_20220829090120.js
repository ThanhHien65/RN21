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
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
