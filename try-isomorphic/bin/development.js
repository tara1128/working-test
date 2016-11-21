#!/usr/bin/env node
console.log('This is Development Environment! Program Started with webpack.dev.js ... ... ');

/* For hot middleware using, this file only executed in development environment */
/* Since this file would be executed before webpack bundle, no ES6 here unless with babel. */

require('babel-polyfill')
require('babel-core/register')({
  plugins: [
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.less', '.css']
    }],
    'transform-async-to-generator'
  ]
})

var Koa = require('koa');
var app = new Koa();
var path = require('path');
var views = require('koa-views');
var json = require('koa-json');
var logger = require('koa-logger');
var koaStatic = require('koa-static-plus');
var koaOnError = require('koa-onerror');
var convert = require('koa-convert');
var Bodyparser = require('koa-bodyparser');
var chokidar = require('chokidar');
var router = require('../server/routes');
var config = require('../common/config');
var templatePath = path.join(__dirname, '../server/template');

var webpack = require('webpack');
var KWM = require('koa-webpack-middleware');
var devMiddleware = KWM.devMiddleware;
var hotMiddleware = KWM.hotMiddleware;
var webpackConfig = require('../webpack.dev');
var compiler = webpack(webpackConfig, function(){
  console.log('This is a CALLBACK of webpack configuration!!!!!!!!');  
  app.use(router);
});
app.env = 'development';
app.use(devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: '/build/',
  stats: {
    colors: true
  }
}));
app.use(hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

/* Using middlewares */
app.use(convert(Bodyparser()));
app.use(convert(json()));
app.use(convert(logger()));

/* Static serve */
app.use(convert(
  koaStatic(path.join(__dirname, '../public'), {pathPrefix: ''})
));

/* Template ejs, must before using router */
app.use(views(templatePath, { extension: 'ejs' }));

/* Koa serve, go to routes to dispatch */
// app.use(router);

/* Error logger */
koaOnError(app, {template: templatePath + '/500.ejs' })

/* Server Listening and Watching */
var server = require('http').createServer(app.callback())
var watcher = chokidar.watch([
  path.join(__dirname, '../client'),
  path.join(__dirname, '../common'),
  path.join(__dirname, '../server')
]);
watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log('Watching is on, clearing cache!');
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\](client|server|common)[\/\\]/.test(id)) delete require.cache[id];
    });
  })
});

server.listen(config.port, function () {
  console.log('In Dev Env!!! App is now listening port', config.port, ' ! ... ... '); 
});

