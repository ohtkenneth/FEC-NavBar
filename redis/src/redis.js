const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

client.on('connect', () => {
  console.log('Redis listening for connections', client.connection_options);
});

module.exports = client;