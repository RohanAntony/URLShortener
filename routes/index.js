var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var URLStore = require('../models/URLStore.js');

var SIZE_OF_STRING = 7;


let makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < SIZE_OF_STRING; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    // URLStore.where({shortened:text})
    // .findOne(function(err,obj){
    //   if(err)
    //     console.log('Error performing database operation')
    //   if(obj){
    //     return makeid(cb);
    //   }else{
    //     cb(text);
    //   }
    // })
    // Move this code out of MakeId as it is part of write operation to DB
}


// Testing mongoose functionality
let addUrl = new URLStore(
  {
    url:'https://google.com',
    shortened:makeid(),
    visits:0,
    details:[]
  }
);

addUrl.save(function(err){
  if(err)
    console.log(err);
  res.json({url:req.body.url,shortened:shortUrl});
});
//End of testing save new objects using mongoose

router.post('/shorten',function(req,res){
  let shortenedURL
  shortenedURL = makeid();
  // function(shortUrl){
  //   var addUrl = new URLStore({url:req.body.url,shortened:shortUrl,visits:0,details:[]});
  //   addUrl.save(function(err){
  //     if(err)
  //       console.log(err);
  //     res.json({url:req.body.url,shortened:shortUrl});
  //   });
  // }
  // Implement a addUrlToDB seperately and call it here
})

router.get('/info/:id',function(req,res){
  // URLStore.where({shortened:req.params.id}).find(function(err,obj){
  //   if(err){
  //     console.log('Error performing database operation');
  //     res.send('Unable to access details');
  //   }
  //   if(obj.length != 0){
  //     res.render('details',{urlObject:obj[0]});
  //   }else{
  //     res.redirect('/pageNotFound/'+req.params.id)
  //   }
  // })
  // Implement a get URL info function which only fetches it from DB
  // Use this function here and convert data to readable format and send it
})

router.get('/:id',function(req,res){
  // console.log(req.params.id);
  // var id = req.params.id;
  // URLStore.where({shortened:req.params.id}).find(function(err,obj){
  //   if(err){
  //     console.log('Error performing database operation');
  //     res.send('Unable to query db');
  //   }
  //   if(obj.length != 0){
  //     console.log('redirecting to '+obj[0].url);
  //     var userDetails = {
  //       ip:req.ip,
  //       ips:req.ips,
  //       time:new Date(),
  //       headers:{
  //         'user-agent':req.get('user-agent'),
  //         accept:req.get('accept'),
  //         'accept-language':req.get('accept-language'),
  //         'accept-encoding':req.get('accept-encoding'),
  //         cookie:req.get('cookie'),
  //         connection:req.get('connection'),
  //         'upgrade-insecure-requests':req.get('upgrade-insecure-requests')
  //       }
  //     }
  //     console.log(req.headers);
  //     obj[0].details.push(userDetails);
  //     obj[0].visits++;
  //     obj[0].save();
  //     res.redirect(obj[0].url);
  //   }else{
  //     res.redirect('/pageNotFound/'+req.params.id)
  //   }
  // })
  // Implement a function to get redirectedURL for shortenedURL
  // Use the above fetch URL info function to fetch the details about the URL
  // Change the properties of the URL info urlObject
  // Implement a function which updates the URL info object and call it with the new URL object
})

module.exports = router;
