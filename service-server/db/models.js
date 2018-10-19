// const Client = require('./index');
// const { adSchema, searchSchema, photoSchema } = require('./schema.js');

// mongodb connection
const connection = require('./index');

async function findAd(id) {
  try {
    // need to give collection to query
    const results = await connection
                    .then(collection => collection.findOne({ id }))
    return results;
  } catch(err) {
    console.log(err);
    return err;
  }
}

// data should be object with all fields id, location, size, brand, season, url
async function createAd(data) {
  try {
    const results = await connection
                      .then(collection => collection.insertOne(data));
    return results
  } catch (err) {
    console.log(err);
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

// async function findAdvertisement(id) {
//   try {
//     Client.
//   } catch(err) {
//     console.log(err);
//     return err;
//   }
// }

module.exports = {
  createAd,
  updateAd,
  deleteAd,
  findAd,
}
