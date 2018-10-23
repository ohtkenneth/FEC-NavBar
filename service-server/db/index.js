const url = `mongodb://localhost:27017`;
import MongoClient from 'mongodb';

// connect is not singleton; just need to do once
const db = MongoClient
  .connect(url)
  .then(client => {
    console.log('Successfully connected to mongodb at', url);
    return client.db('test')
  })
  .then(db => db.collection('advertisements'))
  .catch(err => {
    console.log('Error connecting to mongodb at', err);
  });

module.exports = db;