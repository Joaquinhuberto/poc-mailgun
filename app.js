/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var body_parser = require('body-parser');
var Message = require('./models/message.model');
var mongoose = require('./connect')

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
    res.send('It worked!!!');
    res.end();
     //console.log("Request: ",req.body);
    var message = new Message(req.body);

    message.dealer = req.query.dealerid;

    Message.create(message, function(err) {
        if (err) throw err;

    });
    console.log("---------------------------------------------------------------------------");


    /*
    Message.create(message, function(err, inserted){
        console.log("Insert message OK ", inserted);

    })*/

});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor inicializado en el puerto ", server.address().port);

});





