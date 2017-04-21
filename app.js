var express = require('express')
var app = express()
app.use(express.static('public'))  //tell Express that well keep files in the /public directory
app.set('view engine', 'ejs')

// qeustions for trivia
var questions = {
  'coronado-bridge':{
    question: "Who was the first person to ever drive over the Coronado bridge?",
    answer: "Ronald Reagan",
    img: 'coronadobridge.jpg',
  },
  'hotel-del':{
    question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
    answer: "Hotel Del Coronado",
    img: 'hoteldel.jpg',
  },
  'san-diego-county-fair':{
    question: "What was the original name of the San Diego County Fair?",
    answer: "Del Mar Fair",
    img: 'delmar.jpg',
  },
  'mission-bay':{
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million",
    img: 'missionbay.jpg',
  },
  'la-jolla-playhouse':{
    question: "What famous actor founded the La Jolla Playhouse?",
    answer: "Gregory Peck",
    img: 'lojolla.jpg',
  }
};

app.get('/trivia/:question', function(request, response){
  var questionKey = request.params.question
  var triviaQuestion = questions[questionKey]
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer, 'img': triviaQuestion.img})
})

app.get('/', function (request, response) {
  response.render('index', {'allQuestions': questions});
});

function reverse(s){
  return s.split("").reverse().join("")
}
 function concat(string1, string2){
   returnstring1 + string2
 }

app.get('/', function (request, response) {
 response.render("index")
})

app.get('/home', function (request, response) {
 response.send('Hello World! Enjoy yourself')
})

app.get('/hello/:name', function (request, response){
  var name = request.params["name"]
  response.send("Hello " + name + ".  Welcome!")
})

app.get('/reverse/:name', function (request, response){
  var name = request.params["name"]
  response.send("reverse order "  + reverse(name))
})

app.get('/add/:string1/:string2', function (request, response){
  var string1 = request.params["string1"]
  var string2 = request.params["string2"]
  response.send("add together " + concat(string1, string2))
})

app.get('/add/:string1/:string2', function (request, response){
  var string1 = request.params["string1"]
  var string2 = request.params["string2"]
  response.send("add together " + concat(string1, string2))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})






// app.listen(process.argv[2], function () {
//   console.log('Example app listening on port 4000!')
// })
