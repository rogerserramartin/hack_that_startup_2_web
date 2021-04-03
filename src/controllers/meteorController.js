'use strict';

const mongoose = require('mongoose'),
Meteor = mongoose.model('Meteors'); //collection Meteors

exports.findAll = function(req, res) {
  Meteor.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.addlist = function(req, res) {
  let new_meteor = new Meteor(req.body);
  new_meteor.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
