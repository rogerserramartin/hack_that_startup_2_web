const { text } = require('express');

const router = require('express');//
module.exports = router;

const User = require('../models/userModel');

router.get('/users', async (req, res) => {
    const user_list = await User.find();
    res.send(user_list);
});

