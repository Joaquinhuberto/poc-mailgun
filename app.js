/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var body_parser = require('body-parser');
var Message = require('./models/message.model');
var mongoose = require('./connect');
const os = require("os");
var multer  = require('multer')

var app = express();

app.use(body_parser.urlencoded({limit: '20mb', extended: true}));
app.use(body_parser.json({limit: '20mb'}));
// app.use(body_parser.text({ type: 'text/html' }));
// app.use(body_parser.raw({ type: 'multipart/form-data' }));

app.use(multer({dest:os.tmpdir()+'/attachment/'}).any());

app.post('/newlead', function(req, res){
    var lead = req.body;
    var attachment = lead ['attachment-1'];
    console.log('lead:' + lead);
    var headers = lead['message-headers'];
    var dealer = headers.substring(headers.indexOf('["To"')+8,headers.indexOf('"',headers.indexOf('["To"')+8));
    console.log("Nuevo lead para la empresa: ", dealer);
    if(lead) {
        console.log("\tRecipient:", lead.recipient);
        console.log("\tSender:", lead.sender);
        console.log("\tFrom:", lead.from);
        console.log("\tSubject:", lead.subject);
        res.send('It worked!!!  ---> email: ' + dealer);
    } else{
        console.log("Error in request POST");
        res.send('Error in request POST');
    }
    res.end();

    //var message = new Message(lead);
    //message.dealer = dealer;

    Message.create(lead, function(err) {
        if (err) throw err;
    });
    console.log("---------------------------------------------------------------------------");

});


app.post('/test', function(req, res){
    console.log("req: ", req);
    var lead = req.body;
    console.log("TEST:");
    console.log(lead);
    res.send('It worked!!!');
    res.end();
    console.log("---------------------------------------------------------------------------");

});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor inicializado en el puerto ", server.address().port);
    console.log("---------------------------------------------------------------------------");

});





