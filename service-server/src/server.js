// import env from 'dotenv';
// env.config();
// require('newrelic');
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');

const router = require('./serverRouter.js');

const PORT = 3000;
// const PORT = process.env.DEV_APP_PORT;
const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

// app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '../static')));

// ROUTES
app.use('/product', router);
// only endpoint being used is product/ads

app.get('/', (req, res) => {
  res.send('hello world');
  // app is client App
  // const sheet = new ServerStyleSheet();
  // // extract html
  // const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  // // extract style tags to inject into html template
  // const styleTags = sheet.getStyleTags();
  // res.send(
  //   Html(body, styleTags)
  // );
});

app.get('/loader*', (req, res) => {
  res.send('loaderio-c2b83bc3b4cbb0f88b56c167bc8d05f7');
});

app.listen(PORT, () => {
  // console.log(`SSR listening on port ${PORT} as ${process.env.NEW_RELIC_NAME}`);
  console.log(`SSR listening on port ${PORT}`);
})


