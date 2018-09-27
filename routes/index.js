let express = require('express');
let router = express.Router();

let db = require('../models/URLHelper.js');

let SIZE_OF_STRING = 7;


let makeShortId = () => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( let i=0; i < SIZE_OF_STRING; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

let generateNewShortId = (cb) => {
  let shortenedURL
  shortenedURL = makeShortId();
  db.FindURLById(shortenedURL, (obj) => {
    console.log(obj)
    if(obj){
      shortenedURL = generateNewShortId(cb)
    }else{
      cb(shortenedURL)
    }
  })
}


router.post('/shorten',function(req,res){
  generateNewShortId((shortUrl) => {
    let reqUrl = req.body.url
    console.log(req.body)
    db.SaveURL(reqUrl, shortUrl, (obj) => {
      if(!obj){
        res.end('Error while generating the shortened URL')
      }else{
        res.end('<a href="http://localhost:3000/' + shortUrl + '">http://localhost:3000/' + shortUrl + '</a>')
      }
    })
  })
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
