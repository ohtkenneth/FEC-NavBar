// import 'newrelic';
import "@babel/polyfill";
require('dotenv').config();
import path from 'path';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import morgan from 'morgan';
import parser from 'body-parser';
import cors from 'cors';

// client index
import App from '../client/components/app';
import Html from './Html.js';
import router from './ssrRouter';

const PORT = process.env.DEV_APP_PORT;
const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, '../static')));

// ROUTES
app.use('/product', router);

// generate once
const sheet = new ServerStyleSheet();
// extract html
const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
// extract style tags to inject into html template
const styleTags = sheet.getStyleTags();

app.get('/', (req, res) => {
  // app is client App
  res.send(
    Html(body, styleTags)
  );
});

app.get('/loader*', (req, res) => {
  res.send('loaderio-c2b83bc3b4cbb0f88b56c167bc8d05f7');
});

app.listen(PORT, () => {
  console.log(`SSR listening on port ${PORT}`);
});

