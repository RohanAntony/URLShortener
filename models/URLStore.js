var mongoose = require('mongoose');

var URLShort = new mongoose.Schema({
  url:String,
  shortened:String
})

URLShort.methods.returnUrl = function(id,cb){
  this.where({
    shortened:id
  }).findOne(cb(err,obj));
}

module.exports = mongoose.model('URLTable',URLShort);
