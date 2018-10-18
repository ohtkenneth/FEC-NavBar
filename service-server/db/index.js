// const config = require('../config');
// import config from '../config';

// const mongoose = require('mongoose');
// config.serverIP = TEST_DB_SERVER_IP
const url = `mongodb://localhost:27017`;
// const MongoClient = require('mongodb');
import MongoClient from 'mongodb';

// create mongodb db object to export to models
// connect is not singleton; just need to do once
const db = MongoClient
  .connect(url)
  .then(client => {
    console.log('Successfully connected to mongodb at', url);
    return client.db('test')
  })
  .then(db => db.collection('advertisements'))
  .catch(err => {
    console.log('Error connecting to mongodb at', url);
  });

module.exports = db;