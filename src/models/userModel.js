const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String
});

//Users is a Collection within our MongoDB database
module.exports = mongoose.model('Users', UserSchema);