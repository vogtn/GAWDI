//Require statements & global variables
var express = require("express");
var ejsLayouts = require("express-ejs-layouts");
var app = express();

//Set and Use statements
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//Routes
app.get('/', function(req, res){
  res.render("home");
});


app.get('/about', function(req,res){
  var name = "richard"
  var foods = ["cheese", "mark", "turkey", "monkey brain"];
  res.render("about", {name: name, foods : foods});
});

app.get("/greeting/:first/:last", function(req,res){
  res.send("<h1>Hello, " + req.params.first + " " + req.params.last +  "!</h1>");
});

app.get("/add/:x/:y", function(req,res){
  var result = parseInt(req.params.x) + parseInt(req.params.y);
  res.send(req.params.x + " +  " + req.params.y + " = " + (result))
});

app.get('/add/*', function(req,res){
  var allParams = req.params[0].split("/");
  var result = 0;
  for(var i=0; i < allParams.length; i++){
    result += parseInt(allParams[i]);
  }
  res.send("The answer is " + result)
});
//Listen or export

app.listen(8080);
