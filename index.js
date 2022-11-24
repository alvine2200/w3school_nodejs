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

const mysql2 = require("mysql2");

const connect = mysql2.createConnection({
  host: "localhost",
  user: "Alvine",
  password: "Heidi2022",
  database: "bagisto",
});

connect.connect(function (err) {
  if (err) throw err;
  console.log("mysql2 try connection is a success bagisto");
  const sql =
    "CREATE TABLE nodejs (id INT AUTO_INCREEMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(100))";
  connect.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table is created");
  });
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
