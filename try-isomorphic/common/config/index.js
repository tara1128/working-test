/*
  common/config/index.js
*/

import path from 'path'
const rootPath = path.join(__dirname, '../..')
const TM = new Date().getTime()
const initItems = [{
  id: 100,
  content: 'Data 1 in config file',
  date: TM,
  sta: 1
}, {
  id: 101,
  content: 'Second idea initialized!',
  date: TM,
  sta: 1
}];

export default {
  rootPath,
  publicPath: '/public/build',
  port: 3000,
  sessionID: 'ideasAnytimeSessionID',
  title: 'Ideas Anytime',
  description: 'Record Your Excellent Ideas Anytime You Got One',
  btntext: 'Add An Idea',
  placeholderTxt: 'Please enter something here',
  firstItemID: 100,
  db: {
    dialect: 'sqlite',
    username: 'admin',
    password: 'admin',
    database: 'mydb',
    storage: path.join(rootPath, 'db.sqlite')
  },
  initDatas: initItems
}

