const redis = require('redis');
const client = redis.createClient(6379, 'redis');

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

client.on('connect', () => {
  console.log('Redis listening for connections', client.connection_options);
});

module.exports = client;