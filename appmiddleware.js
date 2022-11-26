const { application } = require("express");

function logOriginalUrl(req, res, next) {
  console.log("The original url is:", req.originalUrl);
}

function logMethod(req, res, next) {
  console.log("the method is:", req.method);
}

const middlewares = [logMethod, logOriginalUrl];

application.get("/user/:id", middlewares, (req, res, next) => {
  console.log(`user infor is logged`);
  res.send('User Info logging section')
});
