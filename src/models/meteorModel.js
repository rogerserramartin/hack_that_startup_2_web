const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
full_name: meteor's name
a: orbit's major semiaxis
e: orbit's excentricity
i: orbit's tilt level
om: longitude of the ascending node
w: perihelion
ma: mean anomaly
*/

const MeteorSchema = new Schema({
  full_name: String,
  a: Number,
  e: Number,
  i: Number,
  om: Number,
  w: Number,
  ma: Number
});

//Meteors is a Collection within our MongoDB database
module.exports = mongoose.model('Meteors', MeteorSchema);