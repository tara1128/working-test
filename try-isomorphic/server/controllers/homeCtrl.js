/*
  server/controllers/homeCtrl.js
*/

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import config from '../../common/config'
import BigButton from '../../common/components/bigButton'

console.log('GET the controller of HomePage render !!');

const btntext = 'BtnInServer';

export default async (ctx) => {
  return ctx.render('index', {
    title: config.title,
    desc: config.description,
    app: renderToString(
      <BigButton btnText={btntext} />
    ),
    reduxData: 0
  })
}
