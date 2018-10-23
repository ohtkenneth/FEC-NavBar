const config = require('../../config').db;
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.serverIp,
    database: config.name,
  },
});

module.exports = knex;