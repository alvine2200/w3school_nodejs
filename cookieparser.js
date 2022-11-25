const express = require("express");
const cookieparser = require("cookie-parser");
const cookieValidator = require("./cookie-validator");
const app = express();
const port = 3000;

const time = function (req, res, next) {
  req.time = Date.now();
  next();
};

async function validateCookie(req, res, next) {
  await cookieValidator(req.cookie);
  console.log("cookie is validated");
  next();
}

app.use([cookieparser(), time, validateCookie]);
app.use((err, req, res, next) => {
  res.status(400).send("err.message");
});

app.get("/", function (req, res) {
  let mytext = "Welcome home lad";
  mytext += `the time is: ${req.time}`;
  res.send(mytext);
  console.log(`home is up`);
});

app.listen(port, () => {
  console.log(`Port ${port} is up and running`);
});
