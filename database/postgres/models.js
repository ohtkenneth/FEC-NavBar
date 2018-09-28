const knex = require('./pgDb');

async function insertSearch(brand, search) {
  try {
    const result = await knex('searches').insert({ brand, search });
    return result;
  } catch(err) {
    return err;
  }
};

module.exports = {
  insertSearch,
};

