const config = require('../config');
const assert = require('assert');

// mongodb connection
const connection = require('./index');

async function findAd(id) {
  try {
    // need to give collection to query
    const results = await connection
                      .then(collection => collection.findOne({ id }));
    return results;
  } catch(err) {
    return err;
  }
}

async function createAd(id, location, size, brand, season, url) {
  try {
    const results = await connection
                      .then(collection => collection.insertOne({ id, location, size, brand, season, url }));
    return results
  } catch (err) {
    return err;
  }
}

async function updateAd(id, options) {
  try {
    const result = await connection
                    .then(collection => collection.updateOne({ id }, { options }));
    return result;
  } catch(err) {
    return err;
  }
}

async function deleteAd(id) {
  try {
    const result = await connection
                    .then(collection => collection.deleteOne({ id }));
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
