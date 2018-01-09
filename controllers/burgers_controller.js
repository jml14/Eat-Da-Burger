var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/all");
});

router.get("/all", function(req, res) {
  burger.get_all(function(data) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/insert_one", function(req, res) {
  burger.insert_one(req.body.name, function(result) {
    res.redirect("/");
  });
});

router.put("/update_one", function(req, res) {
  burger.update_one(req.body.id, function(result) {
    res.redirect("/");
  });
});

module.exports = router;