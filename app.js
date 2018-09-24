/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var body_parser = require('body-parser');
var fs=require('fs');

var app = express();

app.use(body_parser.urlencoded({extended:true}));

app.post('/newlead', function(req, res){

    console.log("Nuevo lead para la empresa: ", req.query.dealerid);
    console.log("\tRecipient:", req.body.recipient);
    console.log("\tSender:", req.body.sender);
    console.log("\tFrom:", req.body.from);
    console.log("\tSubject:", req.body.subject);
    var date = new Date(req.body.timestamp*1000);
    console.log("\tTimestamp:", date.toISOString());
    console.log("");

    fs.writeFile('./'+ req.query.dealerid +'_'+req.body.timestamp +'.html',  req.body.bodyhtml  , function(error){
        if (error)
        console.log(error);
    else
        console.log('El archivo fue creado');
    });
    res.end('It worked!');

});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor inicializado en el puerto ", server.address().port);

});





