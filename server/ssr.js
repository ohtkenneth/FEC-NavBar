import path from 'path';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import morgan from 'morgan';
const parser = require('body-parser');
const cors = require('cors');

// client index
import App from '../client/components/app.jsx';
import Html from './Html.js';

const PORT = 3000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// css stuff
app.get('/*', (req, res) => {
  // app is client App
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  // all style tags 
  const styleTags = sheet.getStyleTags();
  res.send(
    Html(body, styleTags)
  );
});

app.listen(PORT, () => {
  console.log(`SSR listening on port ${PORT}`);
})


