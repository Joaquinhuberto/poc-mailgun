/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var body_parser = require('body-parser');
var Message = require('./models/message.model');
var mongoose = require('./connect');

var app = express();

app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({limit: '50mb', extended: false}));
app.use(body_parser.text({ type: 'text/html' }));

app.post('/newlead', function(req, res){

    console.log("********************************************************************************");
    console.log("req.query: ", req.query);
    console.log("********************************************************************************");
    console.log("req.body: ", req.body);
    console.log("********************************************************************************");
    var dealer = req.query.dealerid;

    var lead = req.body;

    console.log("Nuevo lead para la empresa: ", dealer);

    if(lead) {
        console.log("\tRecipient:", lead.recipient);
        console.log("\tSender:", lead.sender);
        console.log("\tFrom:", lead.from);
        console.log("\tSubject:", lead.subject);
        console.log("\t---------------------------------------------------------------------------");
        res.send('It worked!!!');
    } else{
        console.log("Error in request POST");
        res.send('Error in request POST');
    }
    res.end();


    var message = new Message(lead);

    message.dealer = dealer;

    Message.create(message, function(err) {
        if (err) throw err;
    });
    console.log("---------------------------------------------------------------------------");

});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor inicializado en el puerto ", server.address().port);

});





