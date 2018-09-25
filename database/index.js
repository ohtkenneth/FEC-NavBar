const config = require('../config').db;
const mongoose = require('mongoose');


console.log('config from db', config);
// mongoose.connect('mongodb://mongo/navbar');
mongoose.connect(`mongodb://${config.serverIp}/${config.name}`)
// mongoose.connect('mongodb://localhost:27017/navbar');
const db = mongoose.connection;

db.on('error', err => console.log('Something went wrong ', err));

db.once('connect', result => {
  console.log('Mongo connected ', result);
});

module.exports = db;
