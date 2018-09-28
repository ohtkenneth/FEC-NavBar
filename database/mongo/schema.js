const mongoose = require('mongoose');

var adSchema = new mongoose.Schema({
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

module.exports = {
  adSchema,
  searchSchema,
  brandSchema,
};