const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

//list all users
router.get('/user', async (req, res) => {
  const users = await User.find();
  res.render('index', {
    users
  });
});

//add a user
router.post('/user/add', async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  res.redirect('/user');
});

//get a user by id
router.get('/user/edit/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user)
  res.render('edit', { user });
});

//edit a user by id
router.post('/user/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await User.update({_id: id}, req.body);
  res.redirect('/user');
});

//delete a user by id
router.get('/user/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await User.remove({_id: id});
  res.redirect('/user');
});


module.exports = router;