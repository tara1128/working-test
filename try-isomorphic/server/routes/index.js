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
router.get('/detail', detailState)

export default router
*/

/* react-router: */
import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

export default async (ctx, next) => {
  ctx.render('index', {
    title: 'Here is the title from server!',
    app: renderToString(<div>Hello Server</div>)
  })
}
