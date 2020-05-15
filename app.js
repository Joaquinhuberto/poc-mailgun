/**
 * Created by joaquingarcialanzas on 22/4/18.
 */

var express = require('express');
var formData = require('express-form-data');
var body_parser = require('body-parser');
var Message = require('./models/message.model');
var mongoose = require('./connect');
var multer = require('multer');

const os = require("os");

var app = express();

app.use(body_parser.urlencoded({limit: '20mb', extended: true}));
app.use(body_parser.json({limit: '20mb'}));
// app.use(body_parser.text({ type: 'text/html' }));
// app.use(body_parser.raw({ type: 'multipart/form-data' }));

// const options = {
//   uploadDir: os.tmpdir(),
//   autoClean: true
// };

// // parse data with connect-multiparty. 
// app.use(formData.parse(options));
// app.use(multer({ dest: 'tmp/' , preservePath: true}).any());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/app/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.zip')
    }
  })
  
var upload = multer({ storage: storage })
// var upload = multer({ storage: '/app/' , preservePath: true});

app.post('/newlead', upload.any(), function(req, res){
    
    var lead = req.body;
    console.log(req.body);
    console.log('--------------------------------------------');
    console.log(req.files);
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

    Message.create(lead, function(err) {
        if (err) throw err;
    });
    console.log("---------------------------------------------------------------------------");

});

app.post('/megadialer', upload.any(), function(req, res){

    console.log("megadialer:");
    console.log(JSON.stringify(req.body));
    res.send('It worked Now!!!!!!');
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





