
// const { Pool, Client } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   user: 'Ken',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.sack);
//     }
//     console.log('Query success', result.rows);
//   })
// })

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'Ken', 'none', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with postgres has been established');
    User.sync({ force: true })
      .then(() => {
        return User.create({
          firstName: 'Ken',
          lastName: 'oh',
        });
      })
      .then(() => User.findAll().then(users => console.log(users)));

  })
  .catch(err => {
    console.error('Unable to connect to postgres', err.stack);
  });