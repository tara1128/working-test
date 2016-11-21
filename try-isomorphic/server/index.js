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
app.env = 'production'

/* Using middlewares */
app.use(convert(Bodyparser()))
app.use(convert(json()))
app.use(convert(logger()))

/* Static serve */
app.use(convert(
  koaStatic(path.join(__dirname, '../public'), {pathPrefix: ''})
))

/* Template ejs, must before using router */
app.use(views(templatePath, { extension: 'ejs' }))

/* Try Koa@2, with async & ctx instead of 'this': */
app.use(async (ctx, next) => {
  const start = new Date()
  await next();
  const ms = new Date() - start
  console.log(`${ctx.method} - ${ctx.url} - TYPE: ${ctx.type} ------ ${ms}ms`);
});

/* In prod env: server/index -> router -> home-render */
/* In dev env: bin/dev -> router -> home-render */
app.use(router);

/* Error logger */
koaOnError(app, {template: templatePath + '/500.ejs' })

/* Server Listening */
app.listen(config.port, function(){
  console.log('In Production Environment! App is now listening port', config.port, ', using Koa@2 ... ... '); 
});
