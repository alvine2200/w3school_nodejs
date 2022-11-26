const express = require("express");
const events = require("events");
const http = require("http");

const eventEmmiter = new events.EventEmitter();

const myEventHandler = function () {
  console.log("event is emitted");
};

eventEmmiter.on("scream", myEventHandler);

eventEmmiter.emit("scream");

http
  .createServer(function (req, res) {
    res.write(`Hello world`);
    res.end();
  })
  .listen(8000);
