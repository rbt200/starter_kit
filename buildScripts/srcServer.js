var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;
var app = express();

/* eslint-disable no-console */

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database.
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Mary", lastName: "Shally", email: "mary@yahoo.com" },
    { id: 3, firstName: "Curt", lastName: "Cobain", email: "curt@hotmail.com" },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
