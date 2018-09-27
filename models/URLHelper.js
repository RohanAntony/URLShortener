let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')
let db = mongoose.connection;

let urlShort = new mongoose.Schema({
  url:String,
  short:String,
  visits:Number
})

URLSchema = mongoose.model('URLSchema',urlShort);

let InsertURL = (URLToSave, cb) => {
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
    }else if(!url || !url.length){
      console.log('No objects found')
      cb(null)
    }else{
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

let FindURLById = (Id, cb) => {
  if(!Id)
    return;
  if(!cb){
    console.log('No callback passed for FindURLById call! Returning due to missing callback')
    return;
  }
  FindURL({
    short: Id
  }, (obj) => {
      cb(obj)
  })
}

let SaveURL = (url, id, cb) => {
  if(!url || !id)
    return;
  if(!cb){
    console.log('No callback passed for SaveURL call! Returning due to missing callback')
    return;
  }
  let URLObj = {
    url: url,
    short: id,
    visits: 0
  }
  InsertURL(URLObj, (obj) => {
    if(!obj){
      console.log('Error while saving new URL object')
    }else{
      console.log('Successfully saved url object ' + obj)
    }
    cb(obj)
  })
}

module.exports = {
  Insert: InsertURL,
  Find: FindURL,
  Remove: RemoveURL,
  FindURLById: FindURLById,
  SaveURL: SaveURL
}
