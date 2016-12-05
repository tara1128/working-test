/*
  server/routes/index.js
*/

import Router from 'koa-router'
import homeRenderCtrl from '../controllers/homeCtrl'
import updateListCtrl from '../controllers/updateListController'

const router = new Router()

router.post('/api/add', updateListCtrl)
router.post('/api/del', updateListCtrl)

export default async (ctx, next) => {
  // console.log('In router: ctx.path =', ctx.path, ' @@ ', `${ctx.method} - ${ctx.url} - ${ctx.type}`);
  if (ctx.path.match(/^\/api/)) {
    await updateListCtrl(ctx)
  } else {
    await homeRenderCtrl(ctx)
  }
}
