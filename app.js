var express = require('express');
var app = express();

app.get('/home', function (request, response) {
 response.send('Hello World!');
});

app.get('/hello/:name', function (request, response){
  var name = request.params["name"];
  response.send("Hello " + name + ".  Welcome!");
});

app.get('/reverse/:name', function (request, response){
  var name = request.params["name"];
  response.send(name.reverse);
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
