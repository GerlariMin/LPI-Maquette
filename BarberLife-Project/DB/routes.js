const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const url = require('url');
const bcrypt = require('react-native-bcrypt');
const salt = bcrypt.genSaltSync(10);
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
        connection.query("SELECT * FROM utilisateur_user WHERE mail_user= ? ",[username],function(error,rows,fields){
         
            if(bcrypt.compareSync(password,rows[0].password_user)){
            
                console.log('existe');
                return res.send({sucess:1,data:rows[0].id_user});
            }
            else
            {
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

app.post('/inscription', function(req,res){
    var mail = req.body.mail;
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    const dateNaiss = req.body.dateNaiss;
    var numRue = req.body.numRue;
    var nomRue = req.body.nomRue;
    var cp = req.body.cp;
    var ville = req.body.ville;
    var tel = req.body.tel;
    var mdp = req.body.mdp;
    var verifMdp = req.body.verifMdp;
    var typeProfil = req.body.typeProfil;
    var idToken = 1;
    
    console.log(mail,nom,prenom,dateNaiss,numRue,nomRue,cp,ville,tel,mdp,verifMdp,typeProfil);

    if(mail && nom && prenom && dateNaiss && numRue && nomRue && cp && ville && tel && mdp && verifMdp){
        
        // Mettre l'adresse complète dans une variable
        
        if(mdp == verifMdp){
            var address = numRue + "" + nomRue + "" + ville + "" + cp;
            var hash = bcrypt.hashSync(mdp, salt);
            connection.query("INSERT INTO utilisateur_user(id_tk,typeProfil_user,nom_user,prenom_user,dataNaiss_user,mail_user,numero_user,adress_user,password_user) VALUES (?,?,?,?,?,?,?,?,?) ",[idToken,typeProfil,nom,prenom,dateNaiss,mail,tel,address,hash],function(error,rows,fields){
                res.send({sucess:1});
                console.log('inscription');
            });  
        }
        else{
            res.send({sucess:2});
        }             
    }
    else{
        res.send({sucess:3});
    }
})

app.post('/searchBarber',function(req, res){
    var typeProfil = 0;
    connection.query("select * from utilisateur_user where typeProfil_user = ?",[typeProfil],function(error,rows,fields)
    {
       
        if(rows.length > 0)
        {
            console.log('existe');
        }
        else
        {
            console.log("existe pas");
        }
        return res.send(rows);  
    })   
});

app.post('/rdv',function(req, res){
    var idCoiffeur = req.body.idUser;
    var idUser = 8;
    var date1 = Date.now();
    var date2 = Date.now()+ 1*3600*1000;
    var dateDeb = new Date(date1),
    finalDateDeb = dateDeb.toISOString().split('T')[0]+' '+dateDeb.toTimeString().split(' ')[0];
    var dateFin = new Date(date2),
    finalDateFin = dateFin.toISOString().split('T')[0]+' '+dateFin.toTimeString().split(' ')[0];
    var montant = 10;
    var etatCmd = "En attente de validation";
    console.log(idCoiffeur,idUser,finalDateDeb,finalDateFin,montant,etatCmd);
    connection.query("INSERT INTO commande_cmd (id_user,coiffeur_cmd,etat_cmd,montant_cmd,date_debut_cmd,date_fin_cmd) VALUES (?,?,?,?,?,?) ",[idUser,idCoiffeur,etatCmd,montant,dateDeb,dateFin],function(error,rows,fields){
        if(!error){
            res.send({sucess:1});
        }
        else{
            res.send({sucess:2});
        }
        
       
    });


});