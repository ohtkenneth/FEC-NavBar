const config = require('../../config').db;

console.log('connecting...?', config.serverIp)
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.serverIp,
    database: config.name,
  },
});

module.exports = knex;