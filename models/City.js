let mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: String,
    country: String,
    image: String
  }
);

module.exports = mongoose.model("cities", citySchema);