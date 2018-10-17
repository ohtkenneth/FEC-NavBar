echo "Starting mongos server with configs" \
mongos --configdb cfg1/172.31.14.168:27017,172.31.13.114:27017,172.31.5.84:27017 \
echo "Waiting for mongos to start" \
sleep 3s \
echo "Adding shards" \
mongo --eval "sh.addShard(\"rs1/172.31.7.236:27017,172.31.7.223:27017,172.31.1.138:27017\")" \
mongo --evel "sh.addShard(\"rs2/172.31.8.68:27017,172.31.12.251:27017,172.31.7.181:27017\")" \
echo "Finished setting up mongos"

