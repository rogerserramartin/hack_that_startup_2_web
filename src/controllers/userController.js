'use strict';

const mongoose = require('mongoose'),
User = mongoose.model('Users'); //collection Users

exports.findAll = function(req, res) {
  User.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.addlist = function(req, res) {
  let new_user = new User(req.body);
  new_user.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};