/*
  Webpack configuration file for CMS
  Latest modified: 2016-11-02 18:15
*/

var path = require('path');
var absPathArray = path.resolve().split('/');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/* Default project name: */
var projectName = 'home';
/* Get the name of each project, also the name of its directory */
if( absPathArray ){
  projectName = absPathArray[absPathArray.length - 1];
}

/* Get all languages this project supported: */
var langs = require('../../i18n/cms/langs.json').langs;

/* Variables for final index page: */
var htmlDefaultOptions = {
  template: projectName + '.hbs',
  inject: 'body'
};

/* Make the array for 'plugins', with the traversal of langs: */
var pluginsArray = [];
langs.map(function( lang, index ){
  var _mergedOptions = {};
  var _htmlOptions = require('../../i18n/' + projectName + '/' + lang + '.json' );
  var _fileNameObj = {filename: '../../../dist/' + lang + '/' + projectName + '/index.html'};
  Object.assign(_mergedOptions, htmlDefaultOptions, _fileNameObj, _htmlOptions);
  var _htmlWebpackPlugin = new HtmlWebpackPlugin(_mergedOptions);
  pluginsArray.push( _htmlWebpackPlugin );
});
pluginsArray.push(new ExtractTextPlugin( projectName + '.min.css'));

/* Here comes the module to export! */
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../../../dist/assets/' + projectName + '/' ),
    publicPath: '',
    filename: './assets/' + projectName + '.min.js'
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
