require('dotenv').config();
const s3 = require('s3');
const path = require('path');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const paramsProxy = {
  localFile: path.resolve(__dirname, 'proxy-server', 'proxy.env'),
  s3Params: {
    Bucket: 'fec-imdb',
    Key: 'navbar/proxy.env'
  }
}

const paramsService = {
  localFile: path.resolve(__dirname, 'service-server', 'service.env'),
  s3Params: {
    Bucket: 'fec-imdb',
    Key: 'navbar/service.env'
  }
}

const paramsDb = {
  localFile: path.resolve(__dirname, 'db-server', 'db.env'),
  s3Params: {
    Bucket: 'fec-imdb',
    Key: 'navbar/db.env'
  }
}

const proxyUploader = client.uploadFile(paramsProxy);
const serviceUploader = client.uploadFile(paramsService);
const dbUploader = client.uploadFile(paramsDb);

proxyUploader.on('error', (err) => {
  console.error('Unable to upload: ', err);
});

proxyUploader.on('end', () => {
  console.log('Done uploading proxy.env');
});

serviceUploader.on('error', (err) => {
  console.error('Unable to upload: ', err);
});

serviceUploader.on('end', () => {
  console.log('Done uploading service.env');
});

dbUploader.on('error', (err) => {
  console.error('Unable to upload: ', err);
});

dbUploader.on('end', () => {
  console.log('Done uploading db.env');
});