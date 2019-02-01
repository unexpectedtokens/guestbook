const express = require("express");
const app = express();
var { mongoose } = require("./db/mongoose/mongoose");
var { Review } = require("./db/models/review");
var { User } = require("./db/models/user");

module.exports.App = app.get("/review", (req, res) => {
  Review.find().then(
    reviews => {
      res.send(reviews);
    },
    e => {
      res.status(400).send(e);
    }
  );
});
