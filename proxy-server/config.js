const env = process.env.NODE_ENV || 'dev';

const dev = {
  port: process.env.DEV_APP_PORT,
  serverIp: process.env.DEV_APP_SERVER_IP,
  serviceIp: process.env.DEV_SERVICE_IP,
  servicePort: process.env.DEV_SERVICE_PORT, 
};

const test = {
  port: process.env.TEST_APP_PORT,
  serverIp: process.env.TEST_APP_SERVER_IP,
  loadBalancerIp: process.env.LOAD_BALANCER_IP,
  loadBalancerPort: process.env.LOAD_BALANCER_PORT,
};

const config = {
  dev,
  test,
}

module.exports = config[env];