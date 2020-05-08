import express from 'express'
import mysql from 'mysql'

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'BarberLife'
});

const app = express();

export function TestConnection(inputId,inputMdp){
    connection.getConnection(function (err, connection) {
        connection.query("SELECT * FROM utilisateur_user WHERE mail_user="+inputId+"AND password_user="+inputMdp,function (error, results, fields){

            if(results != null){
                console.log("cool")
            }
            else{
                console.log("PAS COOL")
            }
        })
    })
        
    
}

connection.connect(function(error){
    if(error){
        console.log("erreur");
    }
    else{
        console.log("cool");
    }
    
})

connection.query("SELECT * FROM categorie_cat",function(error,results,fields){
    console.log(results)
})



// A voir plus tard 

/*app.get('/categorie_cat',function(err,connection){
   
    /*connection.getConnection(function(err,connection){
        connection.query('SELECT * FROM categorie_cat',function(error,results,fields){
            if(error)throw error;
            res.send(results)
        })    
        
    })
})*/

/*app.listen(3000,() => {
    console.log('Go to http://localhost/3000/categorie_cat this is the date');
});*/