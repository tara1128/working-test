/*
  webpack.config.js
  Created on: 2016-10-09 11:17
  Latest modified: 2016-10-09 11:17
*/

var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    withReact: './js/*.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, // Require to write " require('./style.css') "
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader?prefix=font/'
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM'
      }
    ],
  },
  resolve: {
    // alias: {}
  },
  plugins: [
    // new webpack.ProvidePlugin({});
  ]
};
