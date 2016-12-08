/*
  server/routes/index.js
*/

import Router from 'koa-router'
import homeRenderCtrl from '../controllers/homeCtrl'
import updateListCtrl from '../controllers/updateListCtrl'

export default async (ctx, next) => {
  if (ctx.path.match(/^\/api/)) {
    console.log('Here comes the API :', ctx.path);
    await updateListCtrl(ctx, next)
  } else {
    await homeRenderCtrl(ctx)
  }
}
