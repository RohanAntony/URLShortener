var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var URLStore = require('../models/URLStore.js');

//Set the db connection to be used by express Application
let db = mongoose.connect('mongodb://localhost/URLShortener');

var SIZE_OF_STRING = 7;


let makeid = () => {
    //Generate a random id of a predefined length. Keep the length to minimum
    //Need to update this to a counter to avoid URL collisions
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < SIZE_OF_STRING; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

router.post('/shorten',function(req,res){
  let shortenedURL
  shortenedURL = makeid();
  res.end('You have reached /shorten')
})

router.get('/info/:id',function(req,res){
  // Implement a get URL info function which only fetches it from DB
  // Use this function here and convert data to readable format and send it
  res.end('You have reached /info/' + req.params.id)
})

router.get('/:id',function(req,res){
  // Implement a function to get redirectedURL for shortenedURLId
  // Increase the visit count of url object using a function
  // Add IP, Browser details for the update function
  res.end('You have reached ' + req.params.id)
})

module.exports = router;
