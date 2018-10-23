// Update with your config settings.
const config = require('../../config').db;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: config.name,
      user: 'Ken',
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
