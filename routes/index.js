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
        res.json({
          status: 'ERROR',
          message: 'Error while generating the request URL'
        })
      }else{
        res.json({
          status: 'SUCCESS',
          data: {
            url: reqUrl,
            shortUrl: shortUrl,
            visits: 0
          }
        })
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
  db.FindURLById(req.params.id, (obj) =>{
    if(!obj){
      res.json({
        status: 'ERROR',
        message: 'Unable to fetch the URL for the given ID'
      })
    }else{
      var resJSON = {
        status: 'SUCCESS',
        data: {
          url: obj[0].url
        }
      }
      res.json(resJSON)
    }
  })
})

module.exports = router;
