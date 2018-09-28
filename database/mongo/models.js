const db = require('./index.js');
const { brandSchema, searchSchema, photoSchema } = require('./schema.js');

var Ad = mongoose.model('brand', brandSchema);
var Search = mongoose.model('search', searchSchema);
var Photo = mongoose.model('photo', photoSchema);

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
    const result = await Ad.create({ id, location, size, url })
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
  deleteAd,
  findAd,
}
