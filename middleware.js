const express = require("express");
const app = express();

const mylogger = function (req, res, next) {
  console.log("logged middleware in place");
  next();
};

var time = function (req, res, next) {
  req.time = Date.now();
  console.log("Time is gotten");
  next();
};

app.use([mylogger, time]);

app.get("/", function (req, res) {
  let responsetext = "Hello home middleware </br>";
  responsetext += `requested at: ${req.time}`;
  res.send(responsetext);
  console.log("welcome home lad, this is the middleware");
  res.end();
});

app.listen(3000, () => {
  console.log("Port 3000 is app and running");
});
