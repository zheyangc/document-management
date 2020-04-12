var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  userName: String
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;