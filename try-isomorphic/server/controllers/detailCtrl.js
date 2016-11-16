/*
  server/controllers/detailCtrl.js
*/

export default async (ctx, next) => {
  ctx.body = {
    title: 'Controllers of detail, title here',
    desc: 'Descriptions of detail...'
  }
}
