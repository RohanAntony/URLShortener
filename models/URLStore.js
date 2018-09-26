let mongoose = require('mongoose');

let urlShort = new mongoose.Schema({
  url:String,
  short:String,
  visits:Number
})

module.exports = mongoose.model('URLSchema',urlShort);
