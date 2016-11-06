var mongoose = require('mongoose');

var URLShort = new mongoose.Schema({
  url:String,
  shortened:String
})

module.exports = mongoose.model('URLTable',URLShort);
