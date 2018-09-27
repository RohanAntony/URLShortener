let mongoose = require('mongoose')
let URLStore = require('./URLStore.js');

let URLSchema = URLStore

mongoose.connect('mongodb://localhost/test')
let db = mongoose.connection;

//implement mongoose helper functions
let SaveURL = (URLToSave, cb) => {
  if(!URLToSave)
    return;
  if(!cb)
    cb = () => { return; }
  var URLModel = new URLSchema(URLToSave);
  URLModel.save((err, obj) => {
    if(err){
      console.log(err)
      cb(null)
    }else {
      console.log("Successfully saved URL " + URLToSave)
      cb(obj)
    }
  })
}

let FindURL = (URLToFind, cb) => {
  if(!URLToFind)
    return;
  if(!cb)
    cb = () => { return; }
  URLSchema.find(URLToFind, (err, url) => {
    if(err){
      console.log(err)
      cb(null);
    }else {
      console.log('Found objects ' + url)
      cb(url)
    }
  })
}

let RemoveURL = (URLToRemove, cb) => {
  if(!URLToRemove)
    return;
  if(!cb)
    cb = () => { return; }
  URLSchema.remove(URLToRemove, (err) => {
    if(err){
      console.log(err)
      cb(err)
    }else{
      console.log("Successfully removed the URL " + URLToRemove)
      cb(null)
    }
  })
}

module.exports = {
  Save: SaveURL,
  Find: FindURL,
  Remove: RemoveURL
}
