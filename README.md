# Zphora navbar microservice

### Microservice consists of several servers:
3 mongod config replica set servers
6 mongod shard replica set servers

### Running on same EC2 instance
6 microservice servers
6 mongoS router servers

Replaced NGINX load balancer with AWS load balancer for better performance