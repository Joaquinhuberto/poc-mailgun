var mongoose = require('mongoose');

mongoose.connect('mongodb://usersaurio:passwordsaurio@pre-cnvwa.dapdacrm.com:27017/leadin');


db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '));

db.on('open', function(err){
    if (err) throw err;
    console.log("Mongoose conectado a la base de datos");
});