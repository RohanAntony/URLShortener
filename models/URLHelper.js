let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')
let db = mongoose.connection;

let urlShort = new mongoose.Schema({
  url:String,
  short:String,
  visits:Number
})

URLSchema = mongoose.model('URLSchema',urlShort);

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
    }else if(!url){
      console.log('No objects found')
      cb({})
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
  if(!cb)
    cb = () => {
      console.log('No callback passed for FindURLById call! Returning due to missing callback')
      return;
    }
  FindURL({
    short: Id
  }, (obj) => {
      cb(obj)
  })

}

module.exports = {
  Save: SaveURL,
  Find: FindURL,
  Remove: RemoveURL,
  FindURLById: FindURLById
}
