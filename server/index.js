require('dotenv').config();

const React = require('react');
const { renderToString } = require('react-dom/server');

const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const config = require('../config').app;
const router = require('./routes.js');
const app = express();

console.log(config);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use('/product', router);

app.use(express.static(path.resolve(__dirname, '../static/')));

module.exports = app;