const db = require('./index.js');
const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  imageUrl: String,
  name: String
});
var searchSchema = new mongoose.Schema({
  search: String
});
var search = mongoose.model('search', searchSchema);
var photo = mongoose.model('photo', photoSchema);

module.exports = { photo, search };
