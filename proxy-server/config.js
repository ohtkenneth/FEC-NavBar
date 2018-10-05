const env = process.env.NODE_ENV || 'test';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 1337,
    serverIp: process.env.DEV_APP_SERVER_IP || '127.0.0.1',
    serviceIp: process.env.DEV_SERVICE_IP,
    servicePort: process.env.DEV_SERVICE_IP, 
  },
};

const test = {
  app: {
    port: process.env.TEST_APP_PORT,
    serverIp: process.env.TEST_APP_SERVER_IP,
    serviceIp: process.env.DEV_SERVICE_IP,
    servicePort: process.env.DEV_SERVICE_IP,
  },
};

const config = {
  dev,
  test,
}

module.exports = config[env];