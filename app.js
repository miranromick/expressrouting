var express = require('express');
var app = express();

function reverse(s){
  return s.split("").reverse().join("");
}
 function concat(string1, string2){
   returnstring1 + string2
 }

app.get('/home', function (request, response) {
 response.send('Hello World!');
});

app.get('/hello/:name', function (request, response){
  var name = request.params["name"];
  response.send("Hello " + name + ".  Welcome!");
});

app.get('/reverse/:name', function (request, response){
  var name = request.params["name"]
  response.send("reverse order "  + reverse(name))
});

app.get('/add/:string1/:string2', function (request, response){
  var string1 = request.params["string1"]
  var string2 = request.params["string2"]
  response.send("add together " + concat(string1, string2))
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

app.listen(process.argv[2], function () {
  console.log('Example app listening on port 4000!');
});
