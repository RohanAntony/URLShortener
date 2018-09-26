let mongoose = require('mongoose')
let URLSchema = require('../models/URLStore.js')

let testConnection = (cb) => {
  mongoose.connect('mongodb://localhost/test')
  let db = mongoose.connection;
  db.on('error', function(){
    console.error('Connection error')
  })
  db.once('open', function(){
    console.log('connection established successfully!!')
    cb(db);
  })
}

let testInsert = (db, cb) => {
  let firstUrl = new URLSchema({
    url:'TestingUrl1',
    short: 'Url1Short',
    visits: 0
  })
  firstUrl.save((err, obj) => {
    if(err)
      console.log('error')
    console.log('Successfully saved object ' + obj)
    cb();
  })
}

let testFind = (db, cb) => {
  let findFirstUrl = {
    url:'TestingUrl1'
  }
  URLSchema.find(findFirstUrl, (err, url) => {
    if(err)
      console.error(err)
    console.log("Found the url object " + url)
    cb()
  })
}

let testRemove = (db, cb) => {
  let findFirstUrl = {
    url:'TestingUrl1'
  }
  URLSchema.remove(findFirstUrl, (err) => {
    if(err)
      console.log(err)
    else{
      console.log('Successfully deleted the url with search ' + findFirstUrl)
      cb()
    }
  })
}

testConnection((db) => {
  testInsert(db, () => {
    testFind(db, () => {
      testRemove(db, () => {
        console.log('Done testing')
      })
    })
  });
})
