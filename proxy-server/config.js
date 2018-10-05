const env = process.env.NODE_ENV || 'dev';

const dev = {
  port: process.env.DEV_APP_PORT || 5000,
  serverIp: process.env.DEV_APP_SERVER_IP || '127.0.0.1',
  serviceIp: process.env.DEV_SERVICE_IP,
  servicePort: process.env.DEV_SERVICE_PORT, 
};

const test = {
  port: process.env.TEST_APP_PORT,
  serverIp: process.env.TEST_APP_SERVER_IP,
  serviceIp: process.env.TEST_SERVICE_IP,
  servicePort: process.env.TEST_SERVICE_PORT,
};

const config = {
  dev,
  test,
}

module.exports = config[env];