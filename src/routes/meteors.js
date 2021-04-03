const express = require('express');
const router = express.Router();

const Meteor = require('../models/meteorModel');

router.get('/meteors', async (req, res) => {
    res.send("We are on meteor page");
});

router.post('/meteors', async (req, res) => {
    //const nea_meteors = await Meteor.find();
    //res.send(nea_meteors);
    console.log(req.body);
});
module.exports = router;