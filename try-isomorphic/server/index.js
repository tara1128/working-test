/*
  server/index.js
*/

import 'babel-polyfill'
import Koa from 'koa'
import router from './routes'
import path from 'path'
import views from 'koa-views'
import json from 'koa-json'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'
import convert from 'koa-convert'
import Bodyparser from 'koa-bodyparser'
import config from '../common/config'
import homeRenderCtrl from './controllers/homeCtrl'
const templatePath = path.join(__dirname, './template')
const app = new Koa()

app.env = 'development'
/* Not Using HMR for this project:
import webpack from 'webpack'
import webpackConfig from '../webpack.build'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
const compiler = webpack(webpackConfig)
app.use(devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: true
  },
  publicPath: '/public/build/',
  stats: {
    colors: true
  }
}));
app.use(hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));
*/

app.use(convert(Bodyparser()))
app.use(convert(json()))
app.use(convert(logger()))

/* Static serve */
app.use(convert(
  koaStatic(path.join(__dirname, '../public'), {pathPrefix: ''})
))

// template ejs, must before using router
app.use(views(templatePath, { extension: 'ejs' }))

/* Try Koa@2, with async & ctx instead of 'this': */
app.use(async (ctx, next) => {
  /* Do something before next */
  const start = new Date()
  await next();
  /* Do something AFTER next */
  const ms = new Date() - start
  console.log(`${ctx.method} - ${ctx.url} - TYPE: ${ctx.type} ------ ${ms}ms`);
});

app.use(async (ctx) => {
  // ctx.body = 'Am i working ... ?';
  console.log('I am about to RENDER::::', `${ctx.method} - ${ctx.url} - ${ctx.type}`);
  await homeRenderCtrl(ctx)
}); 

/* Error logger */
koaOnError(app, {template: templatePath + '/500.ejs' })
app.on('error', function (err, ctx) {
  console.log('App got an ERROR:', err.stack)
})

/* Server Listening */
app.listen(config.port, function(){
  console.log('App is now listening port', config.port, ', using Koa@2 ...');  
});
