/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var body_parser = require('body-parser');
//var fs=require('fs');

var app = express();

app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({limit: '50mb', extended: true}));

app.post('/newlead', function(req, res){

    console.log("Nuevo lead para la empresa: ", req.query.dealerid);
    console.log("\tRecipient:", req.body.recipient);
    console.log("\tSender:", req.body.sender);
    console.log("\tFrom:", req.body.from);
    console.log("\tSubject:", req.body.subject);
    console.log("\t---------------------------------------------------------------------------");
    console.log("Request: ",req.body);
    console.log("---------------------------------------------------------------------------");
    //fs.writeFile('/tmp/'+ req.query.dealerid +'_'+req.body.timestamp +'.html',  req.body.bodyhtml  , function(error){
    //    if (error)
    //    console.log(error);
    //else
    //    console.log('El archivo fue creado');
    //});
    res.send('It worked!!!');
    res.end();

});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor inicializado en el puerto ", server.address().port);

});





