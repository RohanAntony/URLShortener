var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var SIZE_OF_STRING = 6;

var table = {};

function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < SIZE_OF_STRING; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


function addUrl(url){
  var currentString = makeid();
  while(table[currentString]){
    currentString = makeid();
    //modify SIZE_OF_STRING if table is filled up with strings
  }
  table[currentString] = url;
  return currentString;
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/shorten',function(req,res){
  res.render('shorten');
})

router.post('/shorten',function(req,res){
  res.json({url:req.body.url,shortUrl:addUrl(req.body.url)});
})

router.get('/pageNotFound',function(req,res){
  res.send('Page Not Found :::::::::::::::::::');
})

router.get('/details/:id',function(req,res){
  console.log(req.params.id);
  res.send('Details about URL '+req.params.id);
})

router.get('/:id',function(req,res){
  console.log(req.params.id);
  var id = req.params.id;
  if(table.hasOwnProperty(id.toString())){
    console.log('redirecting to '+table[id.toString()]);
    res.redirect(table[id.toString()])
  }else{
    res.redirect('/pageNotFound')
  }
})

module.exports = router;
