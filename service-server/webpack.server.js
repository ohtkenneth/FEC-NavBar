const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
  }
}