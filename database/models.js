const db = require('./index.js');
const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

var photoSchema = new mongoose.Schema({
  bannerUrl: String,
  squareAdUrl: String,
  rectAdUrl: String
});
var searchSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  search: String,
  brand: String
});
var brandSchema = new mongoose.Schema({
  brand: String
});
searchSchema.plugin(random);
var brand = mongoose.model('brand', brandSchema);
var search = mongoose.model('search', searchSchema);
var photo = mongoose.model('photo', photoSchema);

module.exports = { photo, search, brand };
