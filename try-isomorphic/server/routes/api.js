/*
  server/routes/api.js
*/

import Router from 'koa-router'
import controlAddItem from '../controllers/addItemController'
import controlDelItem from '../controllers/delItemController'

const router = new Router()
router.prefix('/api')

router.post('/add', controlAddItem)
router.post('/del', controlDelItem)

export default router
