const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 1337,
    serverIp: process.env.DEV_APP_SERVER_IP || '127.0.0.1'
  },
  db: {
    port: process.env.DEV_DB_PORT || 27017,
    serverIp: process.env.DEV_DB_HOST || '127.0.0.1',
    name: process.env.DEV_DB_NAME || 'dev',
  },
};

const test = {
  app: {
    port: process.env.TEST_DB_PORT || 1337,
    serverIp: process.env.TEST_DB_PORT || 'localhost'
  },
  db: {
    port: process.env.TEST_DB_PORT || 27017,
    serverIp: process.env.TEST_DB_PORT || 'localhost',
  },
};

const config = {
  dev,
  test,
}

module.exports = config[env];