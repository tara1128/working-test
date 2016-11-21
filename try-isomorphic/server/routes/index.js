/*
  server/routes/index.js
*/

/* Dispatch routes: koa-router OR react-router:

/* koa-router: 
import Router from 'koa-router'
import homeState from '../controllers/homeCtrl'
import detailState from '../controllers/detailCtrl'

const router = new Router()
router.prefix('/api')

router.get('/home', homeState)

export default router
*/

/* react-router:
import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
*/
import homeRenderCtrl from '../controllers/homeCtrl'

export default async (ctx, next) => {
  console.log('In router! I am about to render! ==========> ', `${ctx.method} - ${ctx.url} - ${ctx.type}`);
  await homeRenderCtrl(ctx)
}
