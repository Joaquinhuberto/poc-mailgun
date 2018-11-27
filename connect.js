var mongoose = require('mongoose');

var options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: 10,
    reconnectInterval: 500,
    connectTimeoutMS: 10000
};
mongoose.connect('mongodb://'+
    process.env.dbuser + ':' +
    process.env.dbpass + '@' +
    process.env.dbendpoint + ':' +
    process.env.dbport + '/' +
    process.env.dbname,
    options);

db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '));

db.on('open', function(err){
    if (err) throw err;
    console.log("Mongoose conectado a la base de datos");
    console.log("---------------------------------------------------------------------------");
});