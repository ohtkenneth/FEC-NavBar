const assert = require('assert');
const config = require('../config');
const url = `mongodb://${config.serverIp}:${config.port}`;
const MongoClient = require('mongodb');

// create mongodb db object to export to models
const db = MongoClient
  // connect is not singleton; just need to do once
  .connect(url)
  .then(client => {
    console.log('Successfully connected to mongodb at', url);
    return client.db(config.name)
  })
  .then(db => db.collection('advertisements'))
  .catch(err => {
    console.log('Error connecting to mongodb at', url);
  });

module.exports = db;