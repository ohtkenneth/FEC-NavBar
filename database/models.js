const db = require('./index.js');
const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  imageUrl: String,
  name: String
});

var photo = mongoose.model('photo', photoSchema);

module.exports = photo;
