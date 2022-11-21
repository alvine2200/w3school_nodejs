const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const conn = mysql.createConnection({
  host: "localhost",
  user: "Alvine",
  password: "Heidi2022",
  database: "bodaboda",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Connected");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`The app is up and running at port ${port}`);
});
