/*
  Webpack configuration file for Home
  Latest modified: 2016-11-02 15:59
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
var langs = require('../../i18n/' + projectName + '/langs.json').langs;

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../../../dist/' + langs[0] + '/' + projectName + '/' ),
    publicPath: '',
    filename: projectName + '.min.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just Test HOME',
      slogan: 'HOME slogan here...',
      subTitle: 'Sub Title of home!',
      template: projectName + '.hbs',
      inject: 'body'
    }),
    new ExtractTextPlugin( projectName + '.min.css')
  ]
};
