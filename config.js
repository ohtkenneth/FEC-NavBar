const env = process.env.NODE_ENV || 'test';

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
    port: process.env.TEST_APP_PORT,
    serverIp: process.env.TEST_APP_SERVER_IP,
  },
  db: {
    port: process.env.TEST_DB_PORT || 27017,
    serverIp: process.env.TEST_DB_SERVER_IP,
    name: process.env.TEST_DB_NAME
  },
};

const config = {
  dev,
  test,
}

module.exports = config[env];