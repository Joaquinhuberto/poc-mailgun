var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: 10,
    reconnectInterval: 500,


    connectTimeoutMS: 10000
};
mongoose.connect('mongodb://usersaurio:passwordsaurio@pre-cnvwa.dapdacrm.com:27017/leadin', options);


db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '));

db.on('open', function(err){
    if (err) throw err;
    console.log("Mongoose conectado a la base de datos");
});