var express = require('express');
var request = require('request');


var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req,res){

  var qs = {
    s: 'star wars',
  };

  request({
    url: 'http://www.omdbapi.com',
    qs: qs
  }, function(error, response, body){
    if(!error && response.statusCode == 200){
      var dataObj = JSON.parse(body);
      //res.send(dataObj.Search);
      res.render('results', {results: dataObj.Search})
    }
  })
});

app.listen(3000);
