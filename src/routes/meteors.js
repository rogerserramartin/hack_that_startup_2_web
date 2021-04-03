const express = require('express');
const router = express.Router();
const Meteor = require('../model/meteorModel');

//list all meteors
router.get('/meteor', async (req, res) => {
  const meteors = await Meteor.find();
  res.render('index', {
    meteors
  });
});

//add a meteor
router.post('/meteor/add', async (req, res, next) => {
  const meteor = new Meteor(req.body);
  await meteor.save();
  res.redirect('/meteor');
});

//get a meteor by id
router.get('/meteor/edit/:id', async (req, res, next) => {
  const meteor = await Meteor.findById(req.params.id);
  console.log(meteor)
  res.render('edit', { meteor });
});

//edit a meteor by id
router.post('/meteor/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Meteor.update({_id: id}, req.body);
  res.redirect('/meteor');
});

//delete a meteor by id
router.get('/meteor/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Meteor.remove({_id: id});
  res.redirect('/meteor');
});


module.exports = router;