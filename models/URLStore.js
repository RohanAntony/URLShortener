var mongoose = require('mongoose');

var URLShort = new mongoose.Schema({
  url:String,
  shortened:String,
  visits:Number,
  details:Array
})

module.exports = mongoose.model('URLTable',URLShort);
