/*
  Webpack configuration file for CMS
  Latest modified: 2016-11-03 00:35
*/

var path = require('path');
var findRoot = require('find-root');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config');

var devRootPath = findRoot(); // src
// How to get the upper dir of src?
var projectRootName = path.basename(path.resolve());

/* Set paths for the distribution: */
var distPath = devRootPath + '/' + config.websiteRoot; 
var cssPath = distPath + '/' + config.styleRoot;
var jsPath = distPath + '/' + config.scriptRoot;
var imgPath = distPath + '/' + config.imagesRoot;

/* Path of multi-language json files: */
var jsonPath = devRootPath + '/i18n/' + projectRootName + '/';

/* All languages this project supported: */
var langs = require( jsonPath + 'langs.json').langs;

/* Properties for the final index page: */
var htmlDefaultOptions = {
  template: projectRootName + '.hbs', // Need header&footer
  inject: 'body'
};

/* Traversal of langs, creating plugins array */
var pluginsArray = [];
langs.map(function( lang, index ){
  var _mergedOptions = {};
  var _htmlOptions = require( jsonPath + lang + '.json' );
  var _fileNameObj = {filename: distPath + '/' + lang + '/' + projectRootName + '/index.html'};
  Object.assign(_mergedOptions, htmlDefaultOptions, _fileNameObj, _htmlOptions);
  var _htmlWebpackPlugin = new HtmlWebpackPlugin(_mergedOptions);
  pluginsArray.push( _htmlWebpackPlugin );
});

/* After traversal, add CSS */
pluginsArray.push(new ExtractTextPlugin( cssPath + '/' + projectRootName + '.min.css'));

/* Here comes the module to export! */
module.exports = {
  entry: './index.js',
  output: {
    path: jsPath,
    publicPath: '',
    filename: projectRootName + '.min.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  },
  plugins: pluginsArray
};

