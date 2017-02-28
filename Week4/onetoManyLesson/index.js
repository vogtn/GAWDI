var express = require('express');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');

// db.author.create({
//     name: 'Nic Vogt'
// }).then(function(data){
//     console.log(data);
// })

app.get('/', function(req,res){
    // db.author.findOne().then(function(author){
    //     author.createPost({
    //         title: 'This is a post. Hurdy Gurdy!!!',
    //         content: 'Like, what even is a blog... dude?'
    //     }).then(function(post){
    //         res.render('index', {result: post})
    //     });
    // });
    // db.author.findOne().then(function(author){
    //     author.getPosts().then(function(posts){
    //         res.render('index', {result:posts, author: author})
    //     })
    // })

    db.post.findAll({
        include: [db.author]
    }).then(function(posts){
        res.render('index', {result: posts})
    })
});


app.listen(3000);