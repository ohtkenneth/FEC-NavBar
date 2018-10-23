const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  bannerUrl: String,
  squareAdUrl: String,
  rectAdUrl: String
});

const searchSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  search: String,
  brand: String
});

const brandSchema = new mongoose.Schema({
  brand: String
});

const adSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  location: String,
  size: String,
  brand: String,
  season: String,
  url: String,
});

module.exports = {
  adSchema,
  photoSchema,
  searchSchema,
  brandSchema,
};