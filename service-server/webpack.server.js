const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  entry: './src/ssr.js',
  target: 'node',
  externals: [ nodeExternals() ],
  output: {
    path: path.resolve(__dirname, './server-build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        options: {
          presets: ['react', 'env']
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true,
    }),
    new webpack.DefinePlugin({
      'process.env.SUPERTEST': JSON.stringify('This is a test')
    })
  ],
  stats: {
    // Nice colored output
    colors: true
  },
}