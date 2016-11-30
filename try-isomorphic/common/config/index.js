/*
  common/config/index.js
*/

import path from 'path'
const rootPath = path.join(__dirname, '../..')

export default {
  rootPath,
  publicPath: '/public/build',
  port: 3000,
  title: 'Ideas Anytime',
  description: 'Record Your Excellent Ideas Anytime You Got One',
  db: {
    dialect: 'sqlite',
    username: 'admin',
    password: 'admin',
    database: 'mydb',
    storage: path.join(rootPath, 'db.sqlite')
  }
}

