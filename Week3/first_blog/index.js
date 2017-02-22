var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  var fileContents = fs.readFileSync("./data.json")
  //parse
  var articles = JSON.parse(fileContents);
  res.render('home', {articles: articles});
});

app.get('/articles/:id', function(req, res){
  var fileContents = fs.readFileSync("./data.json")
  //parse
  var articles = JSON.parse(fileContents);
  res.render('articles', {articles: articles});
});

app.get('/about', function(req, res){
  res.render('about');
})

app.get('/new', function(req,res){
  res.render("newArticle");
})

app.post('/articles', function(req,res){
  var fileContents = fs.readFileSync("./data.json")
  //parse
  var articles = JSON.parse(fileContents);
    articles.push(req.body);

    fs.writeFileSync("./data.json", JSON.stringify(articles));
    res.redirect('/');
})

app.listen(3000, function() {
  console.log("port 3000");
});
