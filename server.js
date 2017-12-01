//node server
var express = require('express');
var app = express();
var path = require('path');
var appPath = path.resolve(__dirname, '');

app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/public/' + req.path);
});
app.get('/get', function (req, res){
  res.header('Access-Control-Allow-Origin', '*');
  res.json({name: 'fet'});
})

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
