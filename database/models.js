const db = require('./index.js');
const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  bannerUrl: String,
  squareAdUrl: String,
  rectAdUrl: String
});
var searchSchema = new mongoose.Schema({
  search: String,
  brand: String
});
var brandSchema = new mongoose.Schema({
  brand: String
});
var brand = mongoose.model('brand', brandSchema);
var search = mongoose.model('search', searchSchema);
var photo = mongoose.model('photo', photoSchema);

module.exports = { photo, search, brand };
