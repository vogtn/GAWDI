var express = require('express');
var router = express.Router();
var db = require('../models');


//Routes
router.get("/", function(req,res){
  db.team.findAll()
  .then(function(result){
      res.render('allTeams', {teams: result});
  })
  .catch(function(error){
    res.status(404).send("You stink");
  });
});

router.get("/new", function(req,res){
  res.render("newTeam");
});

router.post('/', function(req,res){
  console.log(req.body);
    db.team.create(req.body).then(function(newTeam){
      res.redirect("/teams");
    })
});

router.delete('/:name', function(req, res){
  db.team.destroy({
    where: {name: req.params.name}
  }).then(function(){
    res.send({message: 'sucessful deletion'})
  })
});

router.get('/:name/edit', function(req, res){
  var team = db.team.find({
    where: {name: req.params.name}
  }).then(function(team){
    res.render('edit', {team:team});
  })
})

router.put('/:name', function(req,res){
  db.team.update({
    name: req.body.name,
    members: req.body.members
  },{
    where: {name: req.params.name}
  }).then(function(teamUpdate){
    res.send({message: 'success'})
  })
})
//Export
module.exports = router;
