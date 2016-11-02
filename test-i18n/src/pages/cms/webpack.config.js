/*
  Webpack configuration file for CMS
  Latest modified: 2016-11-02 18:15
*/

var path = require('path');
var findRoot = require('find-root');
var devRootPath = findRoot();
var projectRootName = path.basename(path.resolve());
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var distPath = devRootPath + '/dist/'; /* Identical to the root of www.cmcm.com/ */
var cssPath = distPath + '/css/';
var jsPath = distPath + '/js/';
var imgPath = distPath + '/images/';

// var sourceJson

/* Get all languages this project supported: */
var langs = require('../../i18n/cms/langs.json').langs;

/* Variables for final index page: */
var htmlDefaultOptions = {
  template: projectRootName + '.hbs',
  inject: 'body'
};

/* Make the array for 'plugins', with the traversal of langs: */
var pluginsArray = [];
langs.map(function( lang, index ){
  var _mergedOptions = {};
  var _htmlOptions = require('../../i18n/' + projectRootName + '/' + lang + '.json' );
  var _fileNameObj = {filename: '../../../dist/' + lang + '/' + projectRootName + '/index.html'};
  Object.assign(_mergedOptions, htmlDefaultOptions, _fileNameObj, _htmlOptions);
  var _htmlWebpackPlugin = new HtmlWebpackPlugin(_mergedOptions);
  pluginsArray.push( _htmlWebpackPlugin );
});
pluginsArray.push(new ExtractTextPlugin( projectRootName + '.min.css'));

/* Here comes the module to export! */
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../../../dist/assets/' + projectRootName + '/' ),
    publicPath: '',
    filename: './assets/' + projectRootName + '.min.js'
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
