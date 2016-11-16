/*
  common/config/index.js
*/

import path from 'path'
const rootPath = path.join(__dirname, '../..')

export default {
  rootPath,
  publicPath: '/public/build',
  port: 3000,
  title: 'The Excellent One',
  description: 'This is an experimental project supported by Koa@2, React, Redux and Webpack !',
  db: {
  }
}

