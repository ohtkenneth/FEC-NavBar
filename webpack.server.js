const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/server.js',
  target: 'node',
  externals: [ nodeExternals() ],

  output: {
    path: path.resolve('server-build'),
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
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
}