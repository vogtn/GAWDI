//Requires and Global vars
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

//set and use statements
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

//include external Routes
app.use('/teams', require('./controllers/teams'));

//Routes
app.get("/", function(req,res){
  res.render("home");
});

//listen

app.listen(8080);
