var restify = require('restify');
var server = restify.createServer();

server.get('/',function(req,res,next){
  res.send('This is awesome!!');
})

server.get('/hello/:name',function(req,res,next){
  res.send();
})

server.get('/',function(req,res,next){
  res.send('This is awesome!!');
})
