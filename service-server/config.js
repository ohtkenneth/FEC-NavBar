const env = process.env.NODE_ENV || 'dev';

const dev = {
  appPort: process.env.DEV_APP_PORT || 8000,
  port: process.env.DEV_DB_PORT || 27017,
  serverIp: process.env.DEV_DB_HOST || '127.0.0.1',
  name: process.env.DEV_DB_NAME || 'dev',
};

const test = {
  appPort: process.env.TEST_APP_PORT || 8000,
  port: process.env.TEST_DB_PORT || 27017,
  serverIp: process.env.TEST_DB_SERVER_IP,
  name: process.env.TEST_DB_NAME,
};

const config = {
  dev,
  test,
}

module.exports = config[env];