/*
  server/controllers/formatDate.js
*/

export default (t) => {
  let time = new Date( Number(t) )
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours() > 9 ? (time.getHours()) : ('0' + time.getHours())
  let minute = time.getMinutes() > 9 ? (time.getMinutes()) : ('0' + time.getMinutes())
  let realTime = year + '-' + month + '-' + date + ' ' + hour + ':' + minute
  return realTime
}
