import path from 'path';
import React from 'react';
import express from 'express';
import ReactDOMServer, { renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

// client index
import App from '../client/components/app.jsx';
import Html from '../server-build/Html.js';

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../static/')));

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


