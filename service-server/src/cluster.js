const cluster = require('cluster');
// get num of cpu cores on current machine
// const cors = require('os').cpus().length;

// if cluster is master, take care of managing child processes
if (cluster.isMaster) {
  // create cluster
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }
  // whenever a cluster dies, create a replacement one
  cluster.on('exit', function() {
    cluster.fork();
  });
} else {
  require('./ssr.js');
}