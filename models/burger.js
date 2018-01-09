var express = require('express');
var orm = require('../config/orm');

var burger = {
  get_all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insert_one: function(name, cb) {
    orm.insertOne(name, cb);
  },
  update_one: function(id) {
    orm.updateOne(id);
  }
};

module.exports = burger;
