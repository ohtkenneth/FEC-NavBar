import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import config from '../config';
import App from '../client/index.jsx';

const PORT = config.app.port;
const app = require('./index');

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  // file path to index.html
  const indexFilePath = path.resolve('../static/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log('ERROR from fs.readFile', err);
      return res.status(500).send('Opps');
    }

    return res.send(
      // replace navbar tag in index.html with bundle contents from
      // ReactDOMServer.renderToString
      data.replace(
        '<div id="navbar"></div>', 
        `<div id="navbar">${app}</div>`
      )
    );
  });
})


