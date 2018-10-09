const mongodb = require('./index');
const mongoose = require('mongoose');
const { adSchema, searchSchema, photoSchema } = require('./schema.js');

var Ad = mongoose.model('Advertisement', adSchema);

async function findAd(id) {
  try {
    const result = await Ad.findOne({ id });
    return result;
  } catch(err) {
    return err;
  }
}

async function createAd(id, location, size, brand, season, url) {
  try {
    const result = await Ad.create({ id, location, size, brand, season, url });
    return result;
  } catch(err) {
    return err;
  }
}

async function updateAd(id, options) {
  try {
    const result = await Ad.updateOne({ id }, options);
    return result;
  } catch(err) {
    return err;
  }
}

async function deleteAd(id) {
  try {
    const result = await Ad.deleteOne({ id });
    return result;
  } catch(err) {
    return err;
  }
}

console.log(mongodb);

module.exports = {
  createAd,
  updateAd,
  deleteAd,
  findAd,
}
