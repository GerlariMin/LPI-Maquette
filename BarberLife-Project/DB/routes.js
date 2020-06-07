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
    if(username && password){
        connection.query("SELECT * FROM utilisateur_user WHERE mail_user= ? AND password_user= ? ",[username,password],function(error,rows,fields){
            if(rows.length > 0){
                console.log('existe');
                return res.send({sucess:1,data:rows[0].id_user});
            }
            else{
                console.log("existe pas");
                return res.send({sucess:2});  
              }
            
          });
          console.log(username + " " + password);
    }
    else{
        res.send({sucess:3});
    }
    
});

app.post('/home',function(req,res){
    var idUser = req.body.firstParam;
    console.log(idUser);
    connection.query("select * from utilisateur_user where id_user = ?",[idUser],function(error,rows,fields){
        return res.send(rows); 
    })
   
});