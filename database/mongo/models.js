const mongoose = require('mongoose');
const { adSchema, searchSchema, photoSchema } = require('./schema.js');

var Ad = mongoose.model('Ad', adSchema);

async function findAd(id) {
  try {
    const result = await Ad.findOne({ id });
    return result;
  } catch(err) {
    return err;
  }
}

async function createAd(id, location, size, url) {
  try {
    const result = await Ad.create({ id, location, size, url });
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

module.exports = {
  createAd,
  updateAd,
  deleteAd,
  findAd,
}
