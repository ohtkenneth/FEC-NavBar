const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(`mongodb://${config.serverIp}:${config.port}/${config.name}`);
const db = mongoose.connection;

db.on('error', err => console.log('Something went wrong ', err));
db.once('connect', result => {
  console.log(`Mongoose connected on port ${config.port} at ${config.serverIp}`);
});

module.exports = db;
