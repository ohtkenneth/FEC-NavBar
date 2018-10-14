const env = process.env.NODE_ENV || 'dev';

const config = {
  dev: {
    port: process.env.DEV_APP_PORT || 1337,
    // testing on local machine to bypass load balancer will be service
    balancerIp: process.env.DEV_LOAD_BALANCER_IP || '127.0.0.1',
    balancerPort: process.env.DEV_LOAD_BALANCER_PORT || 8080,
  },
  test: {
    port: process.env.TEST_APP_PORT,
    balancerIp: process.env.TEST_LOAD_BALANCER_IP,
    balancerPort: process.env.TEST_LOAD_BALANCER_PORT,
  }
}

module.exports = config[env];