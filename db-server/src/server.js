require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const config = require('./config');
const router = require('./router');
const PORT = config.appPort;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/product', router);

app.listen(PORT, () => {
  console.log('MongoDB server listening on', PORT);
});