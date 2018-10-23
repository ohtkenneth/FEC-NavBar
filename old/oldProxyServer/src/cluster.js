const cluster = require('cluster');
const cores = require('os').cpus().length;

// if cluster is master, take care of managing child processes
if (cluster.isMaster) {
  // create cluster
  for (let i = 0; i < cores; i++) {
    console.log('creating new cluster');
    cluster.fork();
  }
  // whenever a cluster dies, create a replacement one
  cluster.on('exit', function() {
    console.log('creating new cluster');
    cluster.fork();
  });
} else {
  require('./server.js');
}