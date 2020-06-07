
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const url = require('url');



const app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'BarberLife'
});

var server = app.listen(4545,function(){
    var host = server.address().address
    var port = server.address().port
});

connection.connect(function(error){
    if(error)console.log(error);
    else console.log("connected");
})


app.post('/connexion',function(req,res){
    var username = req.body.firstParam;
    var password = req.body.secondParam;
    connection.query("SELECT * FROM utilisateur_user WHERE mail_user= ? AND password_user= ? ",[username,password],function(error,rows,fields){
      if(rows.length > 0){
          console.log('existe');
          res.redirect(url.format({
              pathname:"/home",
              query:{
                  "connexion":true,
                  "user":username
              }
          }));
      }
      else{
          console.log("existe pas");
          return res.send('Email ou mot de passe incorrect');  
        }
      res.end();
    });
    console.log(username + " " + password);
});

app.get('/home',function(req,res){
    var passed = req.query.connexion;
    var user = req.query.user;
    if(passed){
        console.log(user);
        res.send('Welcome back, ' + user + ' !');
    }
    else{
        res.send('Veuillez vous connecter pour voir cette page');
    }
    res.end();
});