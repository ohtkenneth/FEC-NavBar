import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer, { renderToNodeStream } from 'react-dom/server';
import styled, { ServerStyleSheet } from 'styled-components';

import config from '../config';
// styles for client
import styles from '../client/styles.js';
// client index
import App from '../client/index.jsx';

const PORT = config.app.port;
const app = express();
// const app = require('./index');

// css stuff
const sheet = new ServerStyleSheet();
const jsxStyles = sheet.collectStyles(styles);
const styleStream = sheet.interleaveWithNodeStream(renderToNodeStream(jsxStyles));

app.get('/*', (req, res) => {
  // app is client App
  const appClient = ReactDOMServer.renderToString(<App />);

  // file path to transpiled index.js to serve in bundle
  const indexFilePath = path.resolve('../server-build/index.js');
  fs.readFile(indexFilePath, 'utf8', (err, data) => {
    if (err) {
      console.log('ERROR from fs.readFile', err);
      return res.status(500).send('Opps');
    }
    styleStream.pipe(
      res,
      { end: false },
    );
    return res.send(
      // replace navbar tag in index.html with bundle contents from
      // ReactDOMServer.renderToString
      data.replace(
        '<div id="navbar"></div>', 
        `<div id="navbar">${appClient}</div>`
      )
    );
  });
})

app.listen(PORT, () => {
  console.log(`SSR listening on port ${PORT}`);
})


