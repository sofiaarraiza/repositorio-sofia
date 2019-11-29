let mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    profile: String
  }
);

module.exports = mongoose.model("users", userSchema);