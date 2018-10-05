import env from 'dotenv';
env.config();

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
import router from './router.js';

// const PORT = process.env.TEST_APP_PORT;
const PORT = process.env.DEV_APP_PORT;
const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../static')));

// ROUTES
app.use('/product', router);
// only endpoint being used is product/ads

app.get('/', (req, res) => {
  // app is client App
  const sheet = new ServerStyleSheet();
  // extract html
  const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  // extract style tags to inject into html template
  const styleTags = sheet.getStyleTags();
  res.send(
    Html(body, styleTags)
  );
});

app.listen(PORT, () => {
  console.log(`SSR listening on port ${PORT}`);
})


