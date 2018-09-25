var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/URLShortener');

var URLShort = new mongoose.Schema({
  url:String,
  shortened:String,
  visits:Number,
  details:Array
})

module.exports = mongoose.model('URLTable',URLShort);
